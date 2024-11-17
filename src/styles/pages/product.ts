import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: "1180px",
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7485d4 100%)",
  borderRadius: 8,
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetail = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
    marginBottom: "$md",
  },

  span: {
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
    marginTop: "1rem",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$medium",
    lineHeight: 1.75,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$medium",

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    "&:not(:disabled)hover": {
      backgroundColor: "$green300",
    },
  },
});
