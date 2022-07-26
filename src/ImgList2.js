import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { ImFire } from "react-icons/im";
export default function TitlebarBelowImageList() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ margin: 5, fontWeight: "bold" }}
        align="left"
      >
        <a style={{ color: "red" }}>
          <ImFire />
        </a>{" "}
        Top Bán Chạy{" "}
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
    img: "./loncapnack.png",
    title: "Lợn cắp nách 6 món",
    author: "128.000đ",
  },
  {
    img: "./banhkhotvungtau.png",
    title: "Bánh khọt vũng tàu",
    author: "128.000đ",
  },
  {
    img: "./banhtrangcuonthitheo.png",
    title: "Bánh tráng cuốn thịt heo",
    author: "128.000đ",
  },
  {
    img: "./ruoucan.png",
    title: "Rượu cần",
    author: "128.000đ",
  },
  {
    img: "./goicuhu.png",
    title: "Gỏi củ hủ dừa",
    author: "128.000đ",
  },
];
