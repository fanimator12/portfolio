import {
  Button,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getProject } from "../data/projects";
import { useParams } from "react-router-dom";
import { Project } from "../models/Project";

function ProjectItem({ project }: { project: Project }) {

  useEffect(() => {
    document.title = `${project.title} | fanimator`;
  }, [project]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          height: { xs: "100%", md: "25em" },
        }}
      >
        <Grid
          sx={{
            height: { xs: "12em", md: "auto" },
            width: { xs: "12em", md: "auto" },
          }}
        >
          <CardMedia
            component="img"
            src={`../../${project.image}`}
            sx={{
              borderRadius: "10px",
              transition: "0.5s",
              objectFit: "cover",
              objectPosition: "center",
              height: "15em",
              width: "15em",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "all 0.5s",
              },
              transitionDuration: "500ms",
              animation:
                "1500ms cubic-bezier(0.7, 0, 0.6, 1) 0s 1 normal none running materialize",
            }}
          />
        </Grid>

        <Container
          sx={{
            width: { md: "80rem" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            color="#fff"
            sx={{
              fontSize: { xs: "40px", md: "60px" },
              padding: { xs: "10px", md: 0 },
              float: "right",
              fontFamily: "ChakraPetch Bold",
            }}
          >
            {project.title}
          </Typography>
          <Button
            sx={{
              margin: "20px",
              padding: "auto",
              borderRadius: "5px",
              border: "1px solid #1a1a1a",
              textTransform: "none",
              transition: "0.5s",
              "&:hover": {
                border: "1px solid #5a5a5a",
                color: "#fff",
                borderRadius: "12px",
                transition: "0.5s",
              },
            }}
          >
            <Typography
              color="#fff"
              sx={{
                fontSize: { xs: "18", md: "20px" },
                fontFamily: "ChakraPetch Regular",
              }}
            >
              <Typography
                color="#8a8a8a"
                sx={{
                  fontSize: { xs: "16", md: "18px" },
                  fontFamily: "ChakraPetch Light",
                }}
              >
                Used technologies:
              </Typography>
              {project.technologies}
            </Typography>
          </Button>
        </Container>
      </Container>
      <Container>
        <Typography
          color="#8a8a8a"
          sx={{
            fontSize: "20px",
            fontFamily: "ChakraPetch Light",
          }}
        >
          {project.description}

          <Grid
            sx={{
              padding: { xs: 0, md: "1em" },
              fontSize: "25px",
            }}
          >
            <a
              href={project.url}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
                color: "#fff",
                fontFamily: "ChakraPetch SemiBold",
                textAlign: "center",
              }}
            >
              <br></br>
              {project.url}
            </a>
          </Grid>
        </Typography>
      </Container>
    </>
  );
}

function ProjectPage() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<any>({});
  let { projectId } = useParams();

  const initLoad = async () => {
    try {
      const results = await getProject(projectId!);
      setProject(results);
      componentDidMount();
    } catch (error) {
      setProject({});
    }
  };

  function componentDidMount() {
    setTimeout(
      function () {
        setLoading(false);
      }.bind(loading),
      1000
    );
  }

  useEffect(() => {
    initLoad();
  }, [projectId]);

  useEffect(() => {
    document.title = `Project | fanimator`;
  }, [projectId]);

  return (
    <>
      {loading ? (
        <LinearProgress
          color="secondary"
          sx={{
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
          }}
        />
      ) : project !== undefined ? (
        <Container
          sx={{
            display: { xs: "block" },
            paddingTop: "5em",
            paddingBottom: "5em",
          }}
        >
          <Container className="content" sx={{ minHeight: "8em" }}>
            {project && <ProjectItem project={project} />}
          </Container>
        </Container>
      ) : (
        <Typography
          color="#fff"
          sx={{
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
          }}
        >
          Oops! <br></br> Nothing's here.
        </Typography>
      )}
    </>
  );
}

export default ProjectPage;