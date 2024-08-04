import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { getPhotosList } from "../api/api_root";
import { srcset } from "../components/srcset";

const loadingStyles = {
  borderRadius: "5px",
  width: "60px",
  height: "2px",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
};

const containerStyles = {
  paddingTop: "5em",
  width: "auto",
  height: "auto",
  overflowY: "auto",
  paddingBottom: "5em",
};

const photoStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
};

const emptyStateStyles = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  color: "#fff",
};

export type Photo = {
  filename: string;
  url: string;
};

function Photography() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showButton, setShowButton] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleImageLoad = useCallback(() => {
    if (imageRefs.current.every((img) => img?.complete)) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const allPhotos = await getPhotosList();

        // Filter photos to include only JPEG files with filenames containing only numbers starting from 1
        const filteredPhotos = allPhotos.filter((photo: { filename: string; }) => {
          const filename = photo.filename.toLowerCase();
          const isJpeg = filename.endsWith(".jpg") || filename.endsWith(".jpeg");
          const isNumberOnly = /^[1-9][0-9]*$/.test(filename.replace(/\.[^.]*$/, ""));
          return isJpeg && isNumberOnly;
        });

        setPhotos(filteredPhotos);
      } catch (error) {
        console.error("Error fetching photos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else if (index >= 2) {
          entry.target.classList.remove("visible");
        }
      });
    });

    imageRefs.current.forEach((img, index) => {
      if (img) {
        if (index < 2) {
          img.classList.add("visible");
        }
        observer.observe(img);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [photos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <LinearProgress color="secondary" sx={loadingStyles} />
      ) : photos.length > 0 ? (
        <Container sx={containerStyles}>
          <ImageList
            sx={{
              width: "100%",
              height: "100%",
              transform: "translateZ(0)",
            }}
            variant="quilted"
            cols={2}
            rowHeight={"auto"}
            gap={50}
          >
            {photos.map((photo, index) => {
              return (
                <ImageListItem key={index}>
                  <img
                    ref={(el) => (imageRefs.current[index] = el)}
                    key={photo.filename}
                    {...srcset(photo.filename, 250, 200)}
                    alt={photo.filename}
                    style={photoStyles}
                    onLoad={handleImageLoad}
                    className="fade-in"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Container>
      ) : (
        <Typography sx={emptyStateStyles}>
          Oops! <br /> Nothing's here.
        </Typography>
      )}
    </>
  );
}

export default Photography;
