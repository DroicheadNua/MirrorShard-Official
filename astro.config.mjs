// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 自分のGitHub PagesのURL（ドメイン）
  site: 'https://droicheadnua.github.io',
  // リポジトリ名（サブパス）
  base: '/MirrorShard_2', // これがないとCSSや画像のリンクが切れます
});