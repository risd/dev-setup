**this goes into user settings**

```
{
	"tab_size": 4,
	"translate_tabs_to_spaces": false,
	"word_wrap": true,
	"bold_folder_labels": true,
	"fade_fold_buttons": false,
	"highlight_line": true,
	"highlight_modified_tabs": true,
	"shift_tab_unindent": true,
	"trim_trailing_white_space_on_save": true
}
```

**this goes into user key bindings**

```
[
	{ "keys": ["super+v"], "command":"paste_and_indent" },
	{ "keys": ["super+shift+v"], "command": "paste" },
	{ "keys": ["super+shift+r"],  "command": "reindent" },
	{ "keys": ["super+alt+t"], "command": "unexpand_tabs", "args" : {"set_translate_tabs" : true} }
]
```

*`cmd+v` now pastes and indents, while `cmd+shift+v` simply pastes*
*`cmd+shift+r` will reindent all the selected code*
*`cmd+option+t` will convert all indentation to tabs*

**list of packages**
All Autocomplete
AutoFileName
BracketHighlighter
ColorPicker
CSS3
Emmet
FileDiffs
Git
HTML5
JavascriptCompletions
jQuery
LiveReload
Origami
SCSS
SideBarEnhancements
SublimeLinter
Swig
Takana
Terminal
BufferScroll

**Useful Shortcuts**
```
Cmd+D		Select next match of selection
Cmd+Ctrl+G	Select all matches of selection
```

**Emmet**
```
Ctrl+D		Select everything inside current tag, including the tag. Addition key presses expand selection to next parent
Cmd+Shift+K	Edit current tag/current parent tag
Ctrl+W		Enclose selection in tags
Cmd+'		Delete current tag and its pair
```
