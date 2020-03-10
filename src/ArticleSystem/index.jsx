import React from "react";
import Article from "./../Article";
const ORIGIN = "https://my12.content-cms.com";
const PATH =
  "/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/fa9519d5-0363-4b8d-8e1f-627d802c08a8";

export default function() {
  return <Article origin={ORIGIN} path={PATH} />;
}
