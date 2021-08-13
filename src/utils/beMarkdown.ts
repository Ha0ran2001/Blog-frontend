import marked from 'marked';
import hljs from 'highlightjs';
import 'highlightjs/styles/monokai-sublime.css';
import Tocify from '../components/tocify';

export const toBeMarkdown = (content: string) => {
  const renderer = new marked.Renderer();
  // 生成目录结构
  // 这玩意和生成markdown格式还不能分开成两个方法
  // 这就奇了他妈了个逼的怪了！
  const tocify = new Tocify();
  renderer.heading = (text, level, raw) => {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  }
  // marked参数配置
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  // 将内容生成markdown格式
  const html = marked(content);
  return { html, tocify: tocify.render() };
}
