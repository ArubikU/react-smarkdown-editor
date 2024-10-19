"use strict";(self.webpackChunkreact_smarkdown_editor=self.webpackChunkreact_smarkdown_editor||[]).push([[505],{505:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n=[Object.freeze(JSON.parse('{"displayName":"Gleam","name":"gleam","patterns":[{"include":"#comments"},{"include":"#keywords"},{"include":"#strings"},{"include":"#constant"},{"include":"#entity"},{"include":"#discards"}],"repository":{"binary_number":{"match":"\\\\b0[bB]0*1[01_]*\\\\b","name":"constant.numeric.binary.gleam","patterns":[]},"comments":{"patterns":[{"match":"//.*","name":"comment.line.gleam"}]},"constant":{"patterns":[{"include":"#binary_number"},{"include":"#octal_number"},{"include":"#hexadecimal_number"},{"include":"#decimal_number"},{"include":"#boolean"},{"match":"[A-Z][0-9A-Za-z]*","name":"entity.name.type.gleam"}]},"decimal_number":{"match":"\\\\b(0*[1-9][0-9_]*|0)(\\\\.(0*[1-9][0-9_]*|0)?(e-?0*[1-9]\\\\d*)?)?\\\\b","name":"constant.numeric.decimal.gleam","patterns":[]},"discards":{"match":"\\\\b_(?:[\\\\w]+)?\\\\b","name":"comment.unused.gleam"},"entity":{"patterns":[{"begin":"\\\\b([a-z][\\\\w]*)\\\\b[\\\\s]*\\\\(","captures":{"1":{"name":"entity.name.function.gleam"}},"end":"\\\\)","patterns":[{"include":"$self"}]},{"match":"\\\\b([a-z][\\\\w]*):\\\\s","name":"variable.parameter.gleam"},{"match":"\\\\b([a-z][\\\\w]*):","name":"entity.name.namespace.gleam"}]},"hexadecimal_number":{"match":"\\\\b0[xX]0*[1-9a-zA-Z][0-9a-zA-Z]*\\\\b","name":"constant.numeric.hexadecimal.gleam","patterns":[]},"keywords":{"patterns":[{"match":"\\\\b(as|use|case|if|fn|import|let|assert|pub|type|opaque|const|todo|panic|else|try)\\\\b","name":"keyword.control.gleam"},{"match":"(<-|->)","name":"keyword.operator.arrow.gleam"},{"match":"\\\\|>","name":"keyword.operator.pipe.gleam"},{"match":"\\\\.\\\\.","name":"keyword.operator.splat.gleam"},{"match":"(==|!=)","name":"keyword.operator.comparison.gleam"},{"match":"(<=\\\\.|>=\\\\.|<\\\\.|>\\\\.)","name":"keyword.operator.comparison.float.gleam"},{"match":"(<=|>=|<|>)","name":"keyword.operator.comparison.int.gleam"},{"match":"(&&|\\\\|\\\\|)","name":"keyword.operator.logical.gleam"},{"match":"<>","name":"keyword.operator.string.gleam"},{"match":"\\\\|","name":"keyword.operator.other.gleam"},{"match":"(\\\\+\\\\.|-\\\\.|/\\\\.|\\\\*\\\\.)","name":"keyword.operator.arithmetic.float.gleam"},{"match":"(\\\\+|-|/|\\\\*|%)","name":"keyword.operator.arithmetic.int.gleam"},{"match":"=","name":"keyword.operator.assignment.gleam"}]},"octal_number":{"match":"\\\\b0[oO]0*[1-7][0-7]*\\\\b","name":"constant.numeric.octal.gleam","patterns":[]},"strings":{"begin":"\\"","end":"\\"","name":"string.quoted.double.gleam","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.gleam"}]}},"scopeName":"source.gleam"}'))]}}]);
//# sourceMappingURL=505.b6881a45.chunk.js.map