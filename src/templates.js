import {col, row, css} from "./utils";

function title(block) {
    const {tag, style} = block.options

    return row(col(`<${tag}>${block.value}</${tag}}>`), css(style))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`), css(block.options.style))
}

function columns(block) {
    console.log(block.options)
    const html = block.value.map(col).join('')
    return row(html, css(block.options.style))
}

function image(block) {
    const {imageStyles: is, alt = '', style} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(style))
}

export const templates = {
    title,
    text,
    image,
    columns
}