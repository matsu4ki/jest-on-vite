# Jest on vite

<https://stackblitz.com> 上で動作する、  
「vite + jest + html-report」  
の環境構築用リポジトリです。

## 使用方法

1. 左上の Fork ボタンより Fork する
2. 自動で vite が動作しますが、Frok 時に `index.html` ファイルが無いと動作が止まるようなのでブラウザを更新する
3. Terminal の処理を `Ctrl + C` で停止させる
4. 新しいターミナルを開き、`npm test` or `npm run test:watch`でテストを実行する
5. `npm run dev` で vite を起動する
6. テスト結果が表示される

## Sample

<https://github.com/matsu4ki/jest-on-vite/blob/main/resources/sample.mp4>


## Tips

- 右の画面が小さい場合は、右上にある「Open in New Tab」より大きい画面で確認できる
- `npm run test:watch`はファイル変更毎に test 実行が走るので、重い場合は `npm test` を逐次実行すること
