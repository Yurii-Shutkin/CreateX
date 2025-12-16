import { src, dest, watch } from "gulp";
import pug from 'gulp-pug';
import htmlmin from "gulp-htmlmin";
import rename from "gulp-rename";
import clone from "gulp-clone";
import merge from "merge-stream";
import browserSync from "browser-sync";

import config from "../config.js";

export const htmlBuild = () => {
  return src([
    `${config.src.pug}/**/*index.pug`,
  ])
    .pipe(pug({
      pretty: true
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(dest(config.build.root))
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream());

  // const indexPage = src(`${config.src.html}/pages/home/index.html`)
  //   .pipe(
  //     include({
  //       prefix: "@@",
  //       basepath: "@file",
  //     })
  //   )
  //   .pipe(
  //     rename((file) => {
  //       file.dirname = "";
  //     })
  //   )
  //   .pipe(dest(config.build.root))
  //   .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
  //   .pipe(rename({ suffix: ".min" }))
  //   .pipe(dest(config.build.root));

  // return merge(otherPages, indexPage).pipe(browserSync.stream());
};

export const htmlWatch = () => {
  watch(`${config.src.pug}/**/*.pug`, htmlBuild);
};
