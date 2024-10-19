"use strict";(self.webpackChunkreact_smarkdown_editor=self.webpackChunkreact_smarkdown_editor||[]).push([[2013,7510],{7510:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const i=[Object.freeze(JSON.parse('{"displayName":"Diff","name":"diff","patterns":[{"captures":{"1":{"name":"punctuation.definition.separator.diff"}},"match":"^((\\\\*{15})|(={67})|(-{3}))$\\\\n?","name":"meta.separator.diff"},{"match":"^\\\\d+(,\\\\d+)*(a|d|c)\\\\d+(,\\\\d+)*$\\\\n?","name":"meta.diff.range.normal"},{"captures":{"1":{"name":"punctuation.definition.range.diff"},"2":{"name":"meta.toc-list.line-number.diff"},"3":{"name":"punctuation.definition.range.diff"}},"match":"^(@@)\\\\s*(.+?)\\\\s*(@@)($\\\\n?)?","name":"meta.diff.range.unified"},{"captures":{"3":{"name":"punctuation.definition.range.diff"},"4":{"name":"punctuation.definition.range.diff"},"6":{"name":"punctuation.definition.range.diff"},"7":{"name":"punctuation.definition.range.diff"}},"match":"^(((-{3}) .+ (-{4}))|((\\\\*{3}) .+ (\\\\*{4})))$\\\\n?","name":"meta.diff.range.context"},{"match":"^diff --git a/.*$\\\\n?","name":"meta.diff.header.git"},{"match":"^diff (-|\\\\S+\\\\s+\\\\S+).*$\\\\n?","name":"meta.diff.header.command"},{"captures":{"4":{"name":"punctuation.definition.from-file.diff"},"6":{"name":"punctuation.definition.from-file.diff"},"7":{"name":"punctuation.definition.from-file.diff"}},"match":"(^(((-{3}) .+)|((\\\\*{3}) .+))$\\\\n?|^(={4}) .+(?= - ))","name":"meta.diff.header.from-file"},{"captures":{"2":{"name":"punctuation.definition.to-file.diff"},"3":{"name":"punctuation.definition.to-file.diff"},"4":{"name":"punctuation.definition.to-file.diff"}},"match":"(^(\\\\+{3}) .+$\\\\n?| (-) .* (={4})$\\\\n?)","name":"meta.diff.header.to-file"},{"captures":{"3":{"name":"punctuation.definition.inserted.diff"},"6":{"name":"punctuation.definition.inserted.diff"}},"match":"^(((>)( .*)?)|((\\\\+).*))$\\\\n?","name":"markup.inserted.diff"},{"captures":{"1":{"name":"punctuation.definition.changed.diff"}},"match":"^(!).*$\\\\n?","name":"markup.changed.diff"},{"captures":{"3":{"name":"punctuation.definition.deleted.diff"},"6":{"name":"punctuation.definition.deleted.diff"}},"match":"^(((<)( .*)?)|((-).*))$\\\\n?","name":"markup.deleted.diff"},{"begin":"^(#)","captures":{"1":{"name":"punctuation.definition.comment.diff"}},"comment":"Git produces unified diffs with embedded comments\\"","end":"\\\\n","name":"comment.line.number-sign.diff"},{"match":"^index [0-9a-f]{7,40}\\\\.\\\\.[0-9a-f]{7,40}.*$\\\\n?","name":"meta.diff.index.git"},{"captures":{"1":{"name":"punctuation.separator.key-value.diff"},"2":{"name":"meta.toc-list.file-name.diff"}},"match":"^Index(:) (.+)$\\\\n?","name":"meta.diff.index"},{"match":"^Only in .*: .*$\\\\n?","name":"meta.diff.only-in"}],"scopeName":"source.diff"}'))]},2013:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var i=t(7510);const a=Object.freeze(JSON.parse('{"displayName":"Git Commit Message","name":"git-commit","patterns":[{"begin":"(?=^diff --git)","comment":"diff presented at the end of the commit message when using commit -v.","contentName":"source.diff","end":"\\\\z","name":"meta.embedded.diff.git-commit","patterns":[{"include":"source.diff"}]},{"begin":"^(?!#)","comment":"User supplied message","end":"^(?=#)","name":"meta.scope.message.git-commit","patterns":[{"captures":{"1":{"name":"invalid.deprecated.line-too-long.git-commit"},"2":{"name":"invalid.illegal.line-too-long.git-commit"}},"comment":"Mark > 50 lines as deprecated, > 72 as illegal","match":"\\\\G.{0,50}(.{0,22}(.*))$","name":"meta.scope.subject.git-commit"}]},{"begin":"^(?=#)","comment":"Git supplied metadata in a number of lines starting with #","contentName":"comment.line.number-sign.git-commit","end":"^(?!#)","name":"meta.scope.metadata.git-commit","patterns":[{"captures":{"1":{"name":"markup.changed.git-commit"}},"match":"^#\\\\t((modified|renamed):.*)$"},{"captures":{"1":{"name":"markup.inserted.git-commit"}},"match":"^#\\\\t(new file:.*)$"},{"captures":{"1":{"name":"markup.deleted.git-commit"}},"match":"^#\\\\t(deleted.*)$"},{"captures":{"1":{"name":"keyword.other.file-type.git-commit"},"2":{"name":"string.unquoted.filename.git-commit"}},"comment":"Fallback for non-English git commit template","match":"^#\\\\t([^:]+): *(.*)$"}]}],"scopeName":"text.git-commit","embeddedLangs":["diff"]}')),m=[...i.default,a]}}]);
//# sourceMappingURL=2013.cf2d1470.chunk.js.map