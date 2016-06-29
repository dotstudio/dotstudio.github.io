## 事前準備

### 1. homebrewのインストール(入ってない人)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2. Hugoのインストール (入ってない人)

```
brew update && brew install hugo
```

### 3. このリポジトリのclone

```
git clone git@github.com:dotstudio/hugo-test-blog.git && cd hugo-test-blog
```

## はじめかた

### 1. サーバーを起動

```
hugo server --buildDrafts --watch
```

### 2. ブラウザでアクセス

http://localhost:1313/

## 記事の書き方

`hugo new パス`で使います。ブログの場合は

```
hugo new blog/hogehoge.md
```

これで `content/blog/hogehoge.md` が追加されます。

### 試しにprojectを作ってみる

```
hugo new project/hogehoge.md
```

`content/project/hogehoge.md`が追加されるので編集してみましょう。

http://localhost:1313/ にアクセスすると変化がわかると思います(たぶん)


## new

タイプ名は`blog`か`projects`です。

### 1. ブログ記事を書くとき

`npm run post <タイプ名>/<記事名>`

ex

```
npm run post projects/hard-web-hoge
```

`content/projects/00*-hard-web-hoge.md`
`img/projects/00*/_eyecatch.png`
`img/projects/00*/_thumbnail.png`

などが作られる。

### 2. 記事を消すとき

```
npm run delete blog/00*
```
ex

```
npm run delete blog/004
```

`content/projects/00*-hard-web-hoge.md`
`img/projects/00*/_eyecatch.png`
`img/projects/00*/_thumbnail.png`

などが削除される