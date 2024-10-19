"use strict";(self.webpackChunkreact_smarkdown_editor=self.webpackChunkreact_smarkdown_editor||[]).push([[5584],{5584:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n=[Object.freeze(JSON.parse('{"displayName":"Luau","fileTypes":["luau"],"name":"luau","patterns":[{"include":"#function-definition"},{"include":"#number"},{"include":"#string"},{"include":"#shebang"},{"include":"#comment"},{"include":"#local-declaration"},{"include":"#for-loop"},{"include":"#type-alias-declaration"},{"include":"#keyword"},{"include":"#language_constant"},{"include":"#standard_library"},{"include":"#identifier"},{"include":"#operator"},{"include":"#parentheses"},{"include":"#table"},{"include":"#type_cast"},{"include":"#type_annotation"},{"include":"#attribute"}],"repository":{"attribute":{"patterns":[{"captures":{"1":{"name":"keyword.operator.attribute.luau"},"2":{"name":"storage.type.attribute.luau"}},"match":"(@)([a-zA-Z_]\\\\w*)","name":"meta.attribute.luau"}]},"comment":{"patterns":[{"begin":"--\\\\[(=*)\\\\[","end":"\\\\]\\\\1\\\\]","name":"comment.block.luau","patterns":[{"begin":"(```lua)\\\\s+","beginCaptures":{"1":{"name":"comment.luau"}},"end":"(```)","endCaptures":{"1":{"name":"comment.luau"}},"name":"keyword.operator.other.luau","patterns":[{"include":"source.luau"}]},{"include":"#doc_comment_tags"}]},{"begin":"---","end":"\\\\n","name":"comment.line.double-dash.documentation.luau","patterns":[{"include":"#doc_comment_tags"}]},{"begin":"--","end":"\\\\n","name":"comment.line.double-dash.luau"}]},"doc_comment_tags":{"patterns":[{"match":"@\\\\w+","name":"storage.type.class.luadoc.luau"},{"captures":{"1":{"name":"storage.type.class.luadoc.luau"},"2":{"name":"variable.parameter.luau"}},"match":"((?<=[\\\\s*!\\\\/])[\\\\\\\\@]param)(?:\\\\s)+(\\\\b\\\\w+\\\\b)"}]},"for-loop":{"begin":"\\\\b(for)\\\\b","beginCaptures":{"1":{"name":"keyword.control.luau"}},"end":"\\\\b(in)\\\\b|(=)","endCaptures":{"1":{"name":"keyword.control.luau"},"2":{"name":"keyword.operator.assignment.luau"}},"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.luau"}},"end":"(?=\\\\s*in\\\\b|\\\\s*[=,]|\\\\s*$)","patterns":[{"include":"#type_literal"}]},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"variable.parameter.luau"}]},"function-definition":{"begin":"\\\\b(?:(local)\\\\s+)?(function)\\\\b(?![,:])","beginCaptures":{"1":{"name":"storage.modifier.local.luau"},"2":{"name":"keyword.control.luau"}},"end":"(?<=[)\\\\-{}\\\\[\\\\]\\"\'])","name":"meta.function.luau","patterns":[{"include":"#comment"},{"include":"#generics-declaration"},{"begin":"(\\\\()","beginCaptures":{"1":{"name":"punctuation.definition.parameters.begin.luau"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.parameters.end.luau"}},"name":"meta.parameter.luau","patterns":[{"include":"#comment"},{"match":"\\\\.\\\\.\\\\.","name":"variable.parameter.function.varargs.luau"},{"match":"[a-zA-Z_]\\\\w*","name":"variable.parameter.function.luau"},{"match":",","name":"punctuation.separator.arguments.luau"},{"begin":":","beginCaptures":{"0":{"name":"keyword.operator.type.luau"}},"end":"(?=[),])","patterns":[{"include":"#type_literal"}]}]},{"match":"\\\\b(__add|__call|__concat|__div|__eq|__index|__le|__len|__lt|__metatable|__mod|__mode|__mul|__newindex|__pow|__sub|__tostring|__unm|__iter|__idiv)\\\\b","name":"variable.language.metamethod.luau"},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"entity.name.function.luau"}]},"generics-declaration":{"begin":"(<)","end":"(>)","patterns":[{"match":"[a-zA-Z_]\\\\w*","name":"entity.name.type.luau"},{"match":"=","name":"keyword.operator.assignment.luau"},{"include":"#type_literal"}]},"identifier":{"patterns":[{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b(?=\\\\s*(?:[({\\"\']|\\\\[\\\\[))","name":"entity.name.function.luau"},{"match":"(?<=[^.]\\\\.|:)\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"variable.other.property.luau"},{"match":"\\\\b([A-Z_][A-Z0-9_]*)\\\\b","name":"variable.other.constant.luau"},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"variable.other.readwrite.luau"}]},"interpolated_string_expression":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.interpolated-string-expression.begin.luau"}},"contentName":"meta.embedded.line.luau","end":"\\\\}","endCaptures":{"0":{"name":"punctuation.definition.interpolated-string-expression.end.luau"}},"name":"meta.template.expression.luau","patterns":[{"include":"source.luau"}]},"keyword":{"patterns":[{"match":"\\\\b(break|do|else|for|if|elseif|return|then|repeat|while|until|end|in|continue)\\\\b","name":"keyword.control.luau"},{"match":"\\\\b(local)\\\\b","name":"storage.modifier.local.luau"},{"match":"\\\\b(function)\\\\b(?![,:])","name":"keyword.control.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(self)\\\\b","name":"variable.language.self.luau"},{"match":"\\\\b(and|or|not)\\\\b","name":"keyword.operator.logical.luau keyword.operator.wordlike.luau"},{"match":"(?<=[^.]\\\\.|:)\\\\b(__add|__call|__concat|__div|__eq|__index|__le|__len|__lt|__metatable|__mod|__mode|__mul|__newindex|__pow|__sub|__tostring|__unm)\\\\b","name":"variable.language.metamethod.luau"},{"match":"(?<![.])\\\\.{3}(?!\\\\.)","name":"keyword.other.unit.luau"}]},"language_constant":{"patterns":[{"match":"(?<![^.]\\\\.|:)\\\\b(false)\\\\b","name":"constant.language.boolean.false.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(true)\\\\b","name":"constant.language.boolean.true.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(nil(?!:))\\\\b","name":"constant.language.nil.luau"}]},"local-declaration":{"begin":"\\\\b(local)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.local.luau"}},"end":"(?=\\\\s*do\\\\b|\\\\s*[=;]|\\\\s*$)","patterns":[{"include":"#comment"},{"include":"#attribute"},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.luau"}},"end":"(?=\\\\s*do\\\\b|\\\\s*[=;,]|\\\\s*$)","patterns":[{"include":"#type_literal"}]},{"match":"\\\\b([A-Z_][A-Z0-9_]*)\\\\b","name":"variable.other.constant.luau"},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"variable.other.readwrite.luau"}]},"number":{"patterns":[{"match":"\\\\b0_*[xX]_*[\\\\da-fA-F_]*(?:[eE][+\\\\-]?_*\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]*)?)?","name":"constant.numeric.hex.luau"},{"match":"\\\\b0_*[bB][01_]+(?:[eE][+\\\\-]?_*\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]*)?)?","name":"constant.numeric.binary.luau"},{"match":"(?:\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]*)?|\\\\.\\\\d[\\\\d_]*)(?:[eE][+\\\\-]?_*\\\\d[\\\\d_]*(?:\\\\.[\\\\d_]*)?)?","name":"constant.numeric.decimal.luau"}]},"operator":{"patterns":[{"match":"==|~=|!=|<=?|>=?","name":"keyword.operator.comparison.luau"},{"match":"\\\\+=|-=|/=|//=|\\\\*=|%=|\\\\^=|\\\\.\\\\.=|=","name":"keyword.operator.assignment.luau"},{"match":"\\\\+|-|%|\\\\*|\\\\/\\\\/|\\\\/|\\\\^","name":"keyword.operator.arithmetic.luau"},{"match":"#|(?<!\\\\.)\\\\.{2}(?!\\\\.)","name":"keyword.operator.other.luau"}]},"parentheses":{"begin":"(\\\\()","beginCaptures":{"1":{"name":"punctuation.arguments.begin.luau"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.arguments.end.luau"}},"patterns":[{"match":",","name":"punctuation.separator.arguments.luau"},{"include":"source.luau"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.luau"}},"match":"\\\\A(#!).*$\\\\n?","name":"comment.line.shebang.luau"},"standard_library":{"patterns":[{"match":"(?<![^.]\\\\.|:)\\\\b(assert|collectgarbage|error|gcinfo|getfenv|getmetatable|ipairs|loadstring|newproxy|next|pairs|pcall|print|rawequal|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|typeof|unpack|xpcall)\\\\b","name":"support.function.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(_G|_VERSION)\\\\b","name":"constant.language.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(bit32\\\\.(?:arshift|band|bnot|bor|btest|bxor|extract|lrotate|lshift|replace|rrotate|rshift|countlz|countrz|byteswap)|coroutine\\\\.(?:create|isyieldable|resume|running|status|wrap|yield|close)|debug\\\\.(?:info|loadmodule|profilebegin|profileend|traceback)|math\\\\.(?:abs|acos|asin|atan|atan2|ceil|clamp|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|noise|pow|rad|random|randomseed|round|sign|sin|sinh|sqrt|tan|tanh)|os\\\\.(?:clock|date|difftime|time)|string\\\\.(?:byte|char|find|format|gmatch|gsub|len|lower|match|pack|packsize|rep|reverse|split|sub|unpack|upper)|table\\\\.(?:concat|create|find|foreach|foreachi|getn|insert|maxn|move|pack|remove|sort|unpack|clear|freeze|isfrozen|clone)|task\\\\.(?:spawn|synchronize|desynchronize|wait|defer|delay)|utf8\\\\.(?:char|codepoint|codes|graphemes|len|nfcnormalize|nfdnormalize|offset)|buffer\\\\.(?:create|fromstring|tostring|len|readi8|readu8|readi16|readu16|readi32|readu32|readf32|readf64|writei8|writeu8|writei16|writeu16|writei32|writeu32|writef32|writef64|readstring|writestring|copy|fill))\\\\b","name":"support.function.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(bit32|buffer|coroutine|debug|math(\\\\.(huge|pi))?|os|string|table|task|utf8(\\\\.charpattern)?)\\\\b","name":"support.constant.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(delay|DebuggerManager|elapsedTime|PluginManager|printidentity|settings|spawn|stats|tick|time|UserSettings|version|wait|warn)\\\\b","name":"support.function.luau"},{"match":"(?<![^.]\\\\.|:)\\\\b(game|plugin|shared|script|workspace|Enum(?:\\\\.\\\\w+){0,2})\\\\b","name":"constant.language.luau"}]},"string":{"patterns":[{"begin":"\\"","end":"\\"","name":"string.quoted.double.luau","patterns":[{"include":"#string_escape"}]},{"begin":"\'","end":"\'","name":"string.quoted.single.luau","patterns":[{"include":"#string_escape"}]},{"begin":"\\\\[(=*)\\\\[","end":"\\\\]\\\\1\\\\]","name":"string.other.multiline.luau"},{"begin":"`","end":"`","name":"string.interpolated.luau","patterns":[{"include":"#interpolated_string_expression"},{"include":"#string_escape"}]}]},"string_escape":{"patterns":[{"match":"\\\\\\\\[abfnrtvz\'\\"`{\\\\\\\\]","name":"constant.character.escape.luau"},{"match":"\\\\\\\\\\\\d{1,3}","name":"constant.character.escape.luau"},{"match":"\\\\\\\\x[0-9a-fA-F]{2}","name":"constant.character.escape.luau"},{"match":"\\\\\\\\u\\\\{[0-9a-fA-F]*\\\\}","name":"constant.character.escape.luau"},{"match":"\\\\\\\\$","name":"constant.character.escape.luau"}]},"table":{"begin":"(\\\\{)","beginCaptures":{"1":{"name":"punctuation.table.begin.luau"}},"end":"(\\\\})","endCaptures":{"1":{"name":"punctuation.table.end.luau"}},"patterns":[{"match":"[,;]","name":"punctuation.separator.fields.luau"},{"include":"source.luau"}]},"type-alias-declaration":{"begin":"^\\\\b(?:(export)\\\\s+)?(type)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.visibility.luau"},"2":{"name":"storage.type.luau"}},"end":"(?=\\\\s*$)|(?=\\\\s*;)","patterns":[{"include":"#type_literal"},{"match":"=","name":"keyword.operator.assignment.luau"}]},"type_annotation":{"begin":":(?!\\\\b([a-zA-Z_]\\\\w*)\\\\b(?=\\\\s*(?:[({\\"\']|\\\\[\\\\[)))","end":"(?<=\\\\))(?!\\\\s*->)|=|;|$|(?=\\\\breturn\\\\b)|(?=\\\\bend\\\\b)","patterns":[{"include":"#comment"},{"include":"#type_literal"}]},"type_cast":{"begin":"(::)","beginCaptures":{"1":{"name":"keyword.operator.typecast.luau"}},"end":"(?=^|[;),}\\\\]:?\\\\-+>](?!\\\\s*[&\\\\|])|$|\\\\b(break|do|else|for|if|elseif|return|then|repeat|while|until|end|in|continue)\\\\b)","patterns":[{"include":"#type_literal"}]},"type_literal":{"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"\\\\?|\\\\&|\\\\|","name":"keyword.operator.type.luau"},{"match":"->","name":"keyword.operator.type.luau"},{"match":"\\\\b(false)\\\\b","name":"constant.language.boolean.false.luau"},{"match":"\\\\b(true)\\\\b","name":"constant.language.boolean.true.luau"},{"match":"\\\\b(nil|string|number|boolean|thread|userdata|symbol|any)\\\\b","name":"support.type.primitive.luau"},{"begin":"\\\\b(typeof)\\\\b(\\\\()","beginCaptures":{"1":{"name":"support.function.luau"},"2":{"name":"punctuation.arguments.begin.typeof.luau"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.arguments.end.typeof.luau"}},"patterns":[{"include":"source.luau"}]},{"begin":"(<)","beginCaptures":{"1":{"name":"keyword.operator.type.luau"}},"end":"(>)","endCaptures":{"1":{"name":"keyword.operator.type.luau"}},"patterns":[{"match":"=","name":"keyword.operator.assignment.luau"},{"include":"#type_literal"}]},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"entity.name.type.luau"},{"begin":"\\\\{","end":"\\\\}","patterns":[{"begin":"\\\\[","end":"\\\\]","patterns":[{"include":"#type_literal"}]},{"captures":{"1":{"name":"variable.property.luau"},"2":{"name":"keyword.operator.type.luau"}},"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b(:)"},{"include":"#type_literal"},{"match":"[,;]","name":"punctuation.separator.fields.type.luau"}]},{"begin":"\\\\(","end":"\\\\)","patterns":[{"captures":{"1":{"name":"variable.parameter.luau"},"2":{"name":"keyword.operator.type.luau"}},"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b(:)","name":"variable.parameter.luau"},{"include":"#type_literal"}]}]}},"scopeName":"source.luau"}'))]}}]);
//# sourceMappingURL=5584.8984ae92.chunk.js.map