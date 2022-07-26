import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function TitlebarBelowImageList() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ margin: 5, fontWeight: "bold" }}
        align="left"
      >
        <a style={{ color: "red" }}>!</a> Deal hot Hòn họt{" "}
        <a style={{ color: "red" }}>!</a>
      </Typography>
      <ImageList style={{ margin: 10 }} cols={5} rowHeight="auto">
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ margin: 5, width: 200, height: 250 }}
              src={require(`${item.img}?w=248&fit=crop&auto=format`)}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{ fontWeight: "bold" }}
              title={item.title}
              subtitle={<span> {item.author}</span>}
              position="below"
            />
            <Button variant="outlined" color="success" sx={{ width: 200 }}>
              <a style={{ fontWeight: " bold" }}>Đặt món</a>
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

const itemData = [
  {
    img: "./img1.jpg",
    title: "Phở khô",
    author: "128.000đ",
  },
  {
    img: "./img2.jpg",
    title: "Xôi bảy màu",
    author: "128.000đ",
  },
  {
    img: "./img3.jpg",
    title: "Bún thang lươn",
    author: "128.000đ",
  },
  {
    img: "./img4.jpg",
    title: "Cơm lang gà nướng",
    author: "128.000đ",
  },
  {
    img: "./img5.jpg",
    title: "Bò tơ củ chi",
    author: "128.000đ",
  },
];
