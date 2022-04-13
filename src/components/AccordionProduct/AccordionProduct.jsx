import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./AccordionProduct.css";
import AccordionSpecification from "./AccordionSpecification/AccordionSpecification";
import AccordionFeature from "./AccordionFeature/AccordionFeature";

function AccordionProduct() {
  return (
    <>
      <div className="product-accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={
              <BsPlusCircle
                style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Features
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <AccordionFeature />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={
              <BsPlusCircle
                style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}
              />
            }
            aria-controls="panel2a-content"
            sx={{
              backgroundColor: "#f5f5f5",
            }}
            id="panel2a-header"
          >
            <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Specifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionSpecification />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default AccordionProduct;
