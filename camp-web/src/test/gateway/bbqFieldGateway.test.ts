import { search } from "../../driver/degiqDriver";
import { getBBQField, getCover } from "../../gateway/bbqFieldGateway";
import { degiqHtml, imageHtml, videoHtml } from "./digiqData";
/**
 * @vitest-environment jsdom
 */
describe("デジキューの検索結果をパースする", () => {
  it("BBQ場を取得する", async () => {
    const element = document.createElement("div");
    element.innerHTML = degiqHtml;
    const actual = getBBQField(element);
    const expected = [
      {
        name: "新宿Flags BBQ＆ビアガーデンbyデジキュー",
        place: "新宿駅 東南口 徒歩0分",
        cover: {
          type: "Image",
          src: "https://s3-ap-northeast-1.amazonaws.com/digiq/airstar/img/6464d7e7f98f6c3370571307ad9816ba.jpg",
        },
      },
      {
        name: "デジキューBBQテラス　京王聖蹟桜ヶ丘店",
        place: "最寄り駅 聖蹟桜ヶ丘駅",
        cover: {
          type: "Image",
          src: "https://s3-ap-northeast-1.amazonaws.com/digiq/airstar/img/2e3fdd7e26f6cca2ddadbedf8ebdb54d.jpg",
        },
      },
    ];
    expect(actual).toEqual(expected);
  });
  describe("Coverを取得する", () => {
    it("Imageを取得する", () => {
      const expected = {
        type: "Image",
        src: "https://s3-ap-northeast-1.amazonaws.com/digiq/airstar/img/2e3fdd7e26f6cca2ddadbedf8ebdb54d.jpg",
      };

      const element = document.createElement("div");
      element.innerHTML = imageHtml;
      expect(getCover(element)).toEqual(expected);
    });
    it("Videoを取得する", () => {
      const expected = {
        type: "Video",
        src: "https://digiq.s3.ap-northeast-1.amazonaws.com/airstar/movie/thebbqbeach_aqua.mp4",
      };

      const element = document.createElement("div");
      element.innerHTML = videoHtml;
      expect(getCover(element)).toEqual(expected);
    });
  });
});

export {};
