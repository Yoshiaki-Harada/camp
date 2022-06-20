import { search } from "../../driver/degiqDriver";
import { getBBQField } from "../../gateway/bbqFieldGateway";
import { html } from "./digiqData";
/**
 * @vitest-environment jsdom
 */
describe("デジキューの検索結果をパースする", () => {
  it("BBQ場名を取得する", async () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    const actual = getBBQField(element);
    const expected = [
      {
        name: "新宿Flags BBQ＆ビアガーデンbyデジキュー",
        place: "新宿駅 東南口 徒歩0分",
      },
      {
        name: "デジキューBBQテラス　京王聖蹟桜ヶ丘店",
        place: "最寄り駅 聖蹟桜ヶ丘駅",
      },
    ];
    expect(actual).toEqual(expected);
  });
});

export {};
