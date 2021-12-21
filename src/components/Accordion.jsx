import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

const AccordionStyled = styled((props) => <Accordion {...props} />)(
  ({ theme }) => ({
    backgroundColor: "#ffffff",
  })
);
const AccordionSummaryStyled = styled((props) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: "#ffffff",
}));
const AccordionDetailsStyled = styled((props) => (
  <AccordionDetails {...props} />
))(({ theme }) => ({
  backgroundColor: "#ffffff",
}));

export { AccordionStyled, AccordionSummaryStyled, AccordionDetailsStyled };
