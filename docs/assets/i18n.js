window.MOLT_I18N = {
 "zh-Hans": {
  "meta": {
   "title": "moltdisk · 蜕冗 — 找出能重建的，剩下的交给你",
   "desc": "moltdisk 清点你可以从源码重建的构建产物：node_modules、target、dist、venv。量大小，排序，给出判断依据。它不删除任何东西。",
   "native": "中文（简体）"
  },
  "ui": {
   "skip": "跳到正文",
   "copy": "复制",
   "copied": "已复制",
   "langLabel": "语言",
   "toDark": "深色",
   "toLight": "浅色"
  },
  "gauge": {
   "why": "不删的理由",
   "verdict": "裁决",
   "rulebook": "规则册",
   "limits": "边界",
   "install": "装上",
   "compare": "对照",
   "json": "机器可读",
   "faq": "常问"
  },
  "hero": {
   "t1": "找出能重建的，",
   "t2": "剩下的交给你",
   "lede": "moltdisk 走一遍你的项目，量出能从源码重建的产物——node_modules、target、dist、venv——排好序，并逐条告诉你凭什么这么判。然后它停下。这一版里没有删除代码。",
   "cta1": "装上",
   "cta2": "读源码",
   "cta3": "看一条裁决是怎么得出的",
   "caption": "真实输出。终端里那句结论不是营销，是程序最后一个动作：报告交给谁，由谁决定删不删。"
  },
  "why": {
   "title": "早先的版本能删，所以我们把删除拿掉了",
   "p1": "早期内部构建确实会删。它带着护栏：目录名与同级标记必须同时命中——<span class=\"mono\">target/</span> 旁边得有 <span class=\"mono\">Cargo.toml</span>，<span class=\"mono\">vendor/</span> 旁边得有 <span class=\"mono\">composer.json</span>，<span class=\"mono\">Pods/</span> 旁边得有 <span class=\"mono\">Podfile</span>；符号链接、家目录、给定根之外的路径一律拒绝。",
   "p2": "护栏是好的，但不够。一个凭启发式去删别人构建目录的工具，总有一天会删错；而按下回车的人，不会是写启发式的人。所以在公开之前，删除整段被移除了。",
   "p3": "留下的是本来最有意思的部分：判断，以及把判断摊开给人看。要删，请你自己删，用 moltdisk 递给你的清单。你懂你的项目，moltdisk 只懂它的规则册。",
   "noteTitle": "自证"
  },
  "verdict": {
   "title": "一条裁决要两样东西：名字，和标记",
   "lede": "名字不是证据。<span class=\"mono\">target/</span> 是个普通英文词，一个叫 target 但塞满源码的文件夹并不是构建产物。所以每条规则都要求：名字命中，并且同级存在只有真项目才会有的标记。点开任意一条，看它两半是怎么被逐项查过的。",
   "hint": "<code>moltdisk why &lt;path&gt;</code> 会把这两半原样打印出来，包括没找到时它到底在找什么。",
   "pathLabel": "路径",
   "nameLabel": "名字命中",
   "markerLabel": "检查的标记",
   "kindLabel": "类别",
   "verdictLabel": "裁决"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "名字无歧义——无需标记"
    ],
    "verdict": "可重建",
    "note": "名字本身无歧义的规则：node_modules 只由包管理器生成。"
   },
   {
    "tab": "target，无标记",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——未找到",
     "pom.xml / build.gradle——未找到"
    ],
    "verdict": "不是构建产物",
    "note": "名字命中了，但没有任何标记满足。名字单独不是证据。"
   },
   {
    "tab": "target，有 Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——找到"
    ],
    "verdict": "可重建",
    "note": "cargo build 会把它整个重新生成出来。那句“怎么重建”才是真正的论据。"
   }
  ],
  "rulebook": {
   "title": "规则册就印在 <span class=\"mono\">moltdisk kinds</span> 里",
   "lede": "每条规则后面都跟着一行“怎么重建”——那才是它可被丢弃的真正论据，所以它属于输出的一部分，不是文档里的补丁。",
   "th": {
    "kind": "类别",
    "names": "匹配的名字",
    "marker": "必须有的标记",
    "on": "默认"
   },
   "on": "纳入",
   "off": "需手动开启",
   "none": "无需标记（名字本身无歧义）",
   "note": "<span class=\"mono\">dist/</span>、<span class=\"mono\">build/</span>、<span class=\"mono\">bin/</span>、<span class=\"mono\">venv/</span> 故意不在默认集合里：太多项目模板拿这些名字放源码。报告里的误报很便宜，删除里的误报不便宜——而报告是会被复制进删除命令的。"
  },
  "limits": {
   "title": "它知道自己不明白什么",
   "i1": "符号链接既不跟随也不计入——扫描不会顺着一个链接走出给定根。",
   "i2": "默认深度 8。嵌在 <span class=\"mono\">node_modules</span> 里的 <span class=\"mono\">node_modules</span> 会跳过，数字不会算两遍。",
   "i3": "大小是文件的表观字节数，不是磁盘块占用。<span class=\"mono\">du</span> 可能不同意，因为它量的是另一件事。",
   "i4": "monorepo 根上只有一个 lockfile，也仍然给每个 workspace 单独一条裁决，因为每个 <span class=\"mono\">node_modules</span> 都是分开量的。"
  },
  "install": {
   "title": "装一份，然后跑在你自己身上",
   "lede": "每个 Release 都附预编译二进制，每个压缩包配一份 <span class=\"mono\">.sha256</span>。也可以从源码装：MSRV 1.80，只有一个依赖，没有 unsafe。",
   "bin": "预编译二进制",
   "fromSource": "从源码",
   "releases": "全部版本与校验文件"
  },
  "footer": {
   "line": "MIT 许可。moltdisk 只审计，不删除。"
  },
  "cmp": {
   "title": "别人按名字下手，这里按证据开口",
   "lede": "三种做法的差别不在快慢，在你事后要承担什么。",
   "th1": "做法",
   "th2": "它凭什么下判断",
   "th3": "你事后要承担",
   "r1b": "你记得的那个路径",
   "r1c": "漏掉的留在原地，记错的带走源码",
   "r2n": "按目录名扫描",
   "r2b": "只有名字",
   "r2c": "一个叫 target 的源码目录也被算进去",
   "r3b": "名字 + 同级标记 + 表观字节",
   "r3c": "一份带依据的清单，删不删由你"
  },
  "json": {
   "title": "接进 jq，或者接进 CI",
   "lede": "<code>--json</code> 把同一个结论写成字段：无色、无进度，进管道就能用。",
   "note": "字段就是这些，没有嵌套的对象树。大小是字节，时间是 Unix 秒。",
   "ci": "<code>--jobs</code> 控制测量线程数；<code>--no-color</code> 在重定向时已经自动生效。",
   "cmt1": "# 只要超过 1 GB 的，按大小取路径",
   "cmt2": "# CI：超过阈值就让流水线失败"
  },
  "faq": {
   "title": "你可能想问的六件事",
   "lede": "答案在代码里，不在措辞里。",
   "q1": "它会删我的东西吗？",
   "a1": "不会。0.1.0 里没有 delete 模块，也没有 remove_dir_all；<code>-y</code> 是硬错误，退出码 2。",
   "q2": "为什么 dist/、build/、bin/、venv/ 不在默认集合里？",
   "a2": "太多模板把它们当源码目录。要纳入就写 <code>-k all</code>，判断也随之归你。",
   "q3": "为什么不跟随符号链接？",
   "a3": "避免顺着链接走出你给的根目录，也避免同一份数据被数两遍。",
   "q4": "为什么和 du 报的数字不一样？",
   "a4": "moltdisk 报文件的表观字节数；<code>du</code> 报的是磁盘块占用。",
   "q5": "嵌套的 node_modules 会被重复计吗？",
   "a5": "不会。外层被跳过，每个字节只算一次。",
   "q6": "有 watch、配置文件、日志吗？",
   "a6": "还没有。0.1.0 只有一次性审计；这三项在计划中，尚未发布。"
  }
 },
 "zh-Hant": {
  "meta": {
   "title": "moltdisk · 蜕冗 — 找出能重建的，剩下的交給你",
   "desc": "moltdisk 清點你可以從原始碼重建的建置產物：node_modules、target、dist、venv。量大小，排序，給出判斷依據。它不刪除任何東西。",
   "native": "中文（繁體）"
  },
  "ui": {
   "skip": "跳到正文",
   "copy": "複製",
   "copied": "已複製",
   "langLabel": "語言",
   "toDark": "深色",
   "toLight": "淺色"
  },
  "gauge": {
   "why": "不刪的理由",
   "verdict": "裁決",
   "rulebook": "規則冊",
   "limits": "邊界",
   "install": "安裝",
   "compare": "對照",
   "json": "機器可讀",
   "faq": "常問"
  },
  "hero": {
   "t1": "找出能重建的，",
   "t2": "剩下的交給你",
   "lede": "moltdisk 走一遍你的專案，量出能從原始碼重建的產物——node_modules、target、dist、venv——排好序，並逐條告訴你憑什麼這麼判。然後它停下來。這個版本裡沒有刪除程式碼。",
   "cta1": "安裝",
   "cta2": "讀原始碼",
   "cta3": "看一條裁決是怎麼得出的",
   "caption": "真實輸出。終端裡那句結論不是行銷，是程式最後一個動作：報告交給誰，由誰決定刪不刪。"
  },
  "why": {
   "title": "早先的版本能刪，所以我們把刪除拿掉了",
   "p1": "早期內部建置確實會刪。它帶著護欄：目錄名與同層標記必須同時命中——<span class=\"mono\">target/</span> 旁邊得有 <span class=\"mono\">Cargo.toml</span>，<span class=\"mono\">vendor/</span> 旁邊得有 <span class=\"mono\">composer.json</span>，<span class=\"mono\">Pods/</span> 旁邊得有 <span class=\"mono\">Podfile</span>；符號連結、家目錄、給定根之外的路徑一律拒絕。",
   "p2": "護欄是好的，但不夠。一個憑啟發式去刪別人建置目錄的工具，總有一天會刪錯；而按下 Enter 的人，不會是寫啟發式的人。所以在公開之前，刪除整段被移除了。",
   "p3": "留下的是本來最有意思的部分：判斷，以及把判斷攤開給人看。要刪，請你自己刪，用 moltdisk 遞給你的清單。你懂你的專案，moltdisk 只懂它的規則冊。",
   "noteTitle": "自證"
  },
  "verdict": {
   "title": "一條裁決要兩樣東西：名字，和標記",
   "lede": "名字不是證據。<span class=\"mono\">target/</span> 是個普通英文詞，一個叫 target 卻塞滿原始碼的資料夾並不是建置產物。所以每條規則都要求：名字命中，並且同層存在只有真專案才會有的標記。點開任意一條，看它兩半是怎麼被逐項查過的。",
   "hint": "<code>moltdisk why &lt;path&gt;</code> 會把這兩半原樣印出來，包括沒找到時它到底在找什麼。",
   "pathLabel": "路徑",
   "nameLabel": "名字命中",
   "markerLabel": "檢查的標記",
   "kindLabel": "類別",
   "verdictLabel": "裁決"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "名字無歧義——無需標記"
    ],
    "verdict": "可重建",
    "note": "名字本身無歧義的規則：node_modules 只由套件管理員產生。"
   },
   {
    "tab": "target，無標記",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——未找到",
     "pom.xml / build.gradle——未找到"
    ],
    "verdict": "不是建置產物",
    "note": "名字命中了，但沒有任何標記滿足。名字單獨不是證據。"
   },
   {
    "tab": "target，有 Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——找到"
    ],
    "verdict": "可重建",
    "note": "cargo build 會把它整個重新生成出來。那句「怎麼重建」才是真正的論據。"
   }
  ],
  "rulebook": {
   "title": "規則冊就印在 <span class=\"mono\">moltdisk kinds</span> 裡",
   "lede": "每條規則後面都跟著一行「怎麼重建」——那才是它可被丟棄的真正論據，所以它屬於輸出的一部分，不是文件裡的補丁。",
   "th": {
    "kind": "類別",
    "names": "匹配的名字",
    "marker": "必須有的標記",
    "on": "預設"
   },
   "on": "納入",
   "off": "需手動開啟",
   "none": "無需標記（名字本身無歧義）",
   "note": "<span class=\"mono\">dist/</span>、<span class=\"mono\">build/</span>、<span class=\"mono\">bin/</span>、<span class=\"mono\">venv/</span> 故意不在預設集合裡：太多專案模板拿這些名字放原始碼。報告裡的誤報很便宜，刪除裡的誤報不便宜——而報告是會被複製進刪除指令的。"
  },
  "limits": {
   "title": "它知道自己不明白什麼",
   "i1": "符號連結既不跟隨也不計入——掃描不會順著一個連結走出給定根。",
   "i2": "預設深度 8。嵌在 <span class=\"mono\">node_modules</span> 裡的 <span class=\"mono\">node_modules</span> 會跳過，數字不會算兩遍。",
   "i3": "大小是檔案的表觀位元組數，不是磁碟區塊佔用。<span class=\"mono\">du</span> 可能不同意，因為它量的是另一件事。",
   "i4": "monorepo 根上只有一個 lockfile，也仍然給每個 workspace 單獨一條裁決，因為每個 <span class=\"mono\">node_modules</span> 都是分開量的。"
  },
  "install": {
   "title": "裝一份，然後跑在你自己身上",
   "lede": "每個 Release 都附預編譯二進位，每個壓縮包配一份 <span class=\"mono\">.sha256</span>。也可以從原始碼安裝：MSRV 1.80，只有一個依賴，沒有 unsafe。",
   "bin": "預編譯二進位",
   "fromSource": "從原始碼",
   "releases": "全部版本與校驗檔案"
  },
  "footer": {
   "line": "MIT 授權。moltdisk 只審計，不刪除。"
  },
  "cmp": {
   "title": "別人按名字下手，這裡按證據開口",
   "lede": "三種做法的差別不在快慢，在你事後要承擔什麼。",
   "th1": "做法",
   "th2": "它憑什麼下判斷",
   "th3": "你事後要承擔",
   "r1b": "你記得的那個路徑",
   "r1c": "漏掉的留在原地，記錯的帶走原始碼",
   "r2n": "按目錄名掃描",
   "r2b": "只有名字",
   "r2c": "一個叫 target 的原始碼目錄也被算進去",
   "r3b": "名字 + 同層標記 + 表觀位元組",
   "r3c": "一份有依據的清單，刪不刪由你"
  },
  "json": {
   "title": "接進 jq，或者接進 CI",
   "lede": "<code>--json</code> 把同一個結論寫成欄位：無色、無進度，進管道就能用。",
   "note": "欄位就是這些，沒有嵌套的物件樹。大小是位元組，時間是 Unix 秒。",
   "ci": "<code>--jobs</code> 控制測量執行緒數；<code>--no-color</code> 在重定向時已經自動生效。",
   "cmt1": "# 只要超過 1 GB 的，按大小取路徑",
   "cmt2": "# CI：超過閾值就讓流水線失敗"
  },
  "faq": {
   "title": "你可能想問的六件事",
   "lede": "答案在程式碼裡，不在措辭裡。",
   "q1": "它會刪我的東西嗎？",
   "a1": "不會。0.1.0 沒有 delete 模組，也沒有 remove_dir_all；<code>-y</code> 是硬錯誤，退出碼 2。",
   "q2": "為什麼 dist/、build/、bin/、venv/ 不在預設集合裡？",
   "a2": "太多樣板把它們當原始碼目錄。要納入就寫 <code>-k all</code>，判斷也隨之歸你。",
   "q3": "為什麼不跟隨符號連結？",
   "a3": "避免順著連結走出你給的根目錄，也避免同一份資料被數兩遍。",
   "q4": "為什麼和 du 報的數字不一樣？",
   "a4": "moltdisk 報檔案的表觀位元組數；<code>du</code> 報的是磁碟區塊佔用。",
   "q5": "嵌套的 node_modules 會被重複計嗎？",
   "a5": "不會。外層跳過，每個位元組只算一次。",
   "q6": "有 watch、設定檔、日誌嗎？",
   "a6": "還沒有。0.1.0 只有一次性稽核；這三項在計畫中，未發布。"
  }
 },
 "en": {
  "meta": {
   "title": "moltdisk · 蜕冗 — find what rebuilds, leave the rest alone",
   "desc": "moltdisk walks your projects, measures build output that can be rebuilt from source — node_modules, target, dist, venv — ranks it, and shows the evidence behind every verdict. It never deletes.",
   "native": "English"
  },
  "ui": {
   "skip": "Skip to content",
   "copy": "Copy",
   "copied": "Copied",
   "langLabel": "Language",
   "toDark": "Dark",
   "toLight": "Light"
  },
  "gauge": {
   "why": "Why not a deleter",
   "verdict": "The verdict",
   "rulebook": "The rulebook",
   "limits": "Boundaries",
   "install": "Install",
   "compare": "Compare",
   "json": "Machine",
   "faq": "FAQ"
  },
  "hero": {
   "t1": "Find what rebuilds,",
   "t2": "leave the rest alone.",
   "lede": "moltdisk walks your projects, measures the build output that can be rebuilt from source — node_modules, target, dist, venv — ranks it, and shows the evidence behind every verdict. Then it stops. This build has no delete code path.",
   "cta1": "Install",
   "cta2": "Read the source",
   "cta3": "See how one verdict is made",
   "caption": "Real output. That closing line is not marketing — it is the program's last act: the report goes to whoever decides."
  },
  "why": {
   "title": "An early build could delete, so we removed the deleting",
   "p1": "An early internal build could. It had guard rails: a directory counted only when its name and a sibling marker both matched — target/ needed a Cargo.toml beside it, vendor/ a composer.json, Pods/ a Podfile. It refused symlinks, the home directory, and anything outside the given roots.",
   "p2": "Those guards were good, and not enough. A tool that deletes other people's build directories from a heuristic will one day delete the wrong thing, and the person holding the keyboard will not be the person who wrote the heuristic. So the deleting was removed before this project was ever published.",
   "p3": "What is left is the part that was always the interesting part: the judgement, shown in the open. If you want the deletions, do them yourself, with the list moltdisk hands you. You know your projects; moltdisk only knows its rulebook.",
   "noteTitle": "Self-verification"
  },
  "verdict": {
   "title": "A verdict needs two things: a name, and a marker",
   "lede": "A name is not evidence. target/ is an ordinary English word, and a folder named target full of source files is not build output. So every rule demands two things: the name matches, and a sibling marker exists that only a real project of that kind would have. Pick a case and watch both halves get checked.",
   "hint": "moltdisk why <path> prints both halves verbatim, including the markers it was looking for when nothing matched.",
   "pathLabel": "path",
   "nameLabel": "name matched",
   "markerLabel": "markers checked",
   "kindLabel": "kind",
   "verdictLabel": "verdict"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "unambiguous name — no marker needed"
    ],
    "verdict": "Rebuildable",
    "note": "A name-alone rule: node_modules is only ever produced by a package manager."
   },
   {
    "tab": "target, no marker",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml — not found",
     "pom.xml / build.gradle — not found"
    ],
    "verdict": "Not build output",
    "note": "The name matched, but no marker was satisfied. The name alone is not evidence."
   },
   {
    "tab": "target, with Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml — found"
    ],
    "verdict": "Rebuildable",
    "note": "cargo build will regenerate all of it. The rebuild line is the actual argument."
   }
  ],
  "rulebook": {
   "title": "The rulebook lives in <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Every rule carries a rebuild line — the actual argument for why a directory is disposable — so it is part of the output, not an afterthought in the docs.",
   "th": {
    "kind": "Kind",
    "names": "Names it matches",
    "marker": "Marker required",
    "on": "Default"
   },
   "on": "included",
   "off": "opt-in",
   "none": "none — the name is unambiguous",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> and <span class=\"mono\">venv/</span> are deliberately not in the default set: too many project templates use those names for source. A false positive in a report is cheap; a false positive in a deletion is not — and reports get copy-pasted into deletions."
  },
  "limits": {
   "title": "It knows what it does not understand",
   "i1": "Symlinks are never followed and never counted — a scan cannot walk out of a root through a link.",
   "i2": "Default depth is 8. A <span class=\"mono\">node_modules</span> nested inside a <span class=\"mono\">node_modules</span> is skipped, so the numbers are not double counted.",
   "i3": "Sizes are apparent size — the bytes in the files — not blocks on disk. <span class=\"mono\">du</span> may disagree; <span class=\"mono\">du</span> is measuring something else.",
   "i4": "A monorepo with a single lockfile at the root still gets one verdict per workspace, because each <span class=\"mono\">node_modules</span> is measured separately."
  },
  "install": {
   "title": "Install one, then run it on yourself",
   "lede": "Prebuilt binaries are attached to each release, each archive paired with a <span class=\"mono\">.sha256</span>. Or build from source: MSRV 1.80, one dependency, no unsafe.",
   "bin": "Prebuilt binaries",
   "fromSource": "From source",
   "releases": "All releases and checksums"
  },
  "footer": {
   "line": "MIT licensed. moltdisk audits; it does not delete."
  },
  "cmp": {
   "title": "Others act on a name. This acts on evidence.",
   "lede": "The difference is not speed. It is what you are left holding afterwards.",
   "th1": "Approach",
   "th2": "What it judges by",
   "th3": "What it costs you",
   "r1b": "The path you happen to remember",
   "r1c": "Forgotten piles stay put; misremembered ones take source with them",
   "r2n": "A name-matching sweeper",
   "r2b": "The name alone",
   "r2c": "A source folder called target counts too",
   "r3b": "Name, sibling marker, apparent bytes",
   "r3c": "A list with its reasons; the decision stays yours"
  },
  "json": {
   "title": "Pipe it into jq, or into CI",
   "lede": "<code>--json</code> writes the same verdict as fields: no colour, no progress, safe through a pipe.",
   "note": "That is the whole schema. Sizes are bytes, times are Unix seconds.",
   "ci": "<code>--jobs</code> sets the measuring threads; <code>--no-color</code> already kicks in when stdout is redirected.",
   "cmt1": "# only targets over 1 GB, by size",
   "cmt2": "# CI: fail the pipeline above a threshold"
  },
  "faq": {
   "title": "Six things you are probably about to ask",
   "lede": "The answers live in the code, not in the wording.",
   "q1": "Does it delete anything of mine?",
   "a1": "No. 0.1.0 has no delete module and no remove_dir_all. <code>-y</code> is a hard error, exit code 2.",
   "q2": "Why are dist/, build/, bin/ and venv/ not in the default set?",
   "a2": "Too many templates use those names for source. Opt in with <code>-k all</code>, and the judgement becomes yours.",
   "q3": "Why not follow symlinks?",
   "a3": "So a link cannot walk out of the root you gave, and the same bytes are never counted twice.",
   "q4": "Why does this differ from du?",
   "a4": "moltdisk measures the apparent bytes in files; <code>du</code> measures blocks on disk.",
   "q5": "Are nested node_modules counted twice?",
   "a5": "No. The outer one is skipped, so every byte is counted once.",
   "q6": "Is there watch, a config file, logging?",
   "a6": "Not yet. 0.1.0 does a single audit; all three are planned, none are released."
  }
 },
 "ja": {
  "meta": {
   "title": "moltdisk · 蜕冗 — 再生成できるものを見つけて、残りはあなたに",
   "desc": "moltdisk はプロジェクトを走査し、ソースから再生成できるビルド成果物（node_modules、target、dist、venv）を測定・整理し、各判定の根拠を示します。一切削除しません。",
   "native": "日本語"
  },
  "ui": {
   "skip": "本文へジャンプ",
   "copy": "コピー",
   "copied": "コピーしました",
   "langLabel": "言語",
   "toDark": "ダーク",
   "toLight": "ライト"
  },
  "gauge": {
   "why": "削除しない理由",
   "verdict": "判定",
   "rulebook": "ルールブック",
   "limits": "境界",
   "install": "インストール",
   "compare": "比較",
   "json": "機械可読",
   "faq": "よくある質問"
  },
  "hero": {
   "t1": "再生成できるものを",
   "t2": "見つける。残りはあなたに",
   "lede": "moltdisk はプロジェクトを走査し、ソースから再生成できるビルド成果物——node_modules、target、dist、venv——を測定し、並べ替え、各判定の根拠を示します。そこで止まります。このビルドに削除コードはありません。",
   "cta1": "インストール",
   "cta2": "ソースを読む",
   "cta3": "判定がどう下されるかを見る",
   "caption": "実際の出力です。最後の一行はマーケティングではなく、プログラムの最後の動作です。報告書を渡す相手が、消すかどうかを決めるのです。"
  },
  "why": {
   "title": "初期版は削除できた。だから削除を外した",
   "p1": "初期の内部ビルドは削除できました。ガードがありました：ディレクトリ名と同階層のマーカーが両方一致したときだけ対象——<span class=\"mono\">target/</span> の隣には <span class=\"mono\">Cargo.toml</span>、<span class=\"mono\">vendor/</span> の隣には <span class=\"mono\">composer.json</span>、<span class=\"mono\">Pods/</span> の隣には <span class=\"mono\">Podfile</span>。シンボリックリンク、ホームディレクトリ、指定ルート外は拒否しました。",
   "p2": "ガードは良かったが、十分ではありませんでした。ヒューリスティックで他人のビルドディレクトリを消すツールは、いつか間違ったものを消します。そしてキーボードを押す人は、ヒューリスティックを書いた人ではない。だから公開される前に、削除は丸ごと取り除かれました。",
   "p3": "残ったのは、最初から面白い部分でした：判断、そしてそれを開かれた形で示すこと。消したいなら、moltdisk が渡すリストで自分で消してください。あなたは自分のプロジェクトを知っている。moltdisk が知っているのはルールブックだけです。",
   "noteTitle": "自己検証"
  },
  "verdict": {
   "title": "判定には二つのものが必要：名前とマーカー",
   "lede": "名前は証拠ではない。<span class=\"mono\">target/</span> は普通の英語の単語で、target という名前のフォルダがソースファイルで埋まっていてもビルド成果物とは限りません。だからすべてのルールは二つを要求します：名前が一致し、かつ本物のプロジェクトだけが持つ同階層マーカーが存在すること。いずれかを選んで、両方の半分がどう検査されるかを見てください。",
   "hint": "<code>moltdisk why &lt;path&gt;</code> はこの両半分を逐語で出力します。何も一致しなかったとき、探していたマーカーも含めて。",
   "pathLabel": "パス",
   "nameLabel": "一致した名前",
   "markerLabel": "検査したマーカー",
   "kindLabel": "種類",
   "verdictLabel": "判定"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "名前は曖昧でない——マーカー不要"
    ],
    "verdict": "再生成可能",
    "note": "名前だけで確定するルール：node_modules はパッケージマネージャだけが作る。"
   },
   {
    "tab": "target、マーカーなし",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——見つからず",
     "pom.xml / build.gradle——見つからず"
    ],
    "verdict": "ビルド成果物ではない",
    "note": "名前は一致したが、どのマーカーも満たされなかった。名前だけでは証拠にならない。"
   },
   {
    "tab": "target、Cargo.toml あり",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——見つかった"
    ],
    "verdict": "再生成可能",
    "note": "cargo build がすべて再生成します。「どう再生成するか」の行こそが実際の論拠です。"
   }
  ],
  "rulebook": {
   "title": "ルールブックは <span class=\"mono\">moltdisk kinds</span> に生きている",
   "lede": "各ルールの後に「再生成方法」の行が続きます——それがディレクトリが捨てられる理由の実体なので、出力の一部であり、ドキュメントの後付けではありません。",
   "th": {
    "kind": "種類",
    "names": "一致する名前",
    "marker": "必要なマーカー",
    "on": "デフォルト"
   },
   "on": "含める",
   "off": "明示指定",
   "none": "不要（名前自体が曖昧でない）",
   "note": "<span class=\"mono\">dist/</span>、<span class=\"mono\">build/</span>、<span class=\"mono\">bin/</span>、<span class=\"mono\">venv/</span> は意図的にデフォルトセットに含めていません：あまりにも多くのプロジェクトテンプレートがこれらの名前をソースに使うからです。レポートの誤検知は安い。削除の誤検知は安くない——そしてレポートは削除コマンドにコピペされるのです。"
  },
  "limits": {
   "title": "自分が何を分かっていないかを知っている",
   "i1": "シンボリックリンクは追跡も計上もされません——スキャンはリンクを通じてルートの外へ出られない。",
   "i2": "デフォルトの深さは 8。<span class=\"mono\">node_modules</span> の内側にネストされた <span class=\"mono\">node_modules</span> はスキップされ、数値が二重に数えられることはありません。",
   "i3": "サイズは見かけ上のサイズ（ファイルのバイト数）であり、ディスク上のブロックではありません。<span class=\"mono\">du</span> は違う値を出すかもしれません。<span class=\"mono\">du</span> は別のものを測っているからです。",
   "i4": "ルートに lockfile が一つしかない monorepo でも、workspace ごとに個別の判定が出ます。それぞれの <span class=\"mono\">node_modules</span> は別々に測定されるからです。"
  },
  "install": {
   "title": "インストールして、自分の上で走らせる",
   "lede": "各リリースにプリビルドバイナリを添付、各アーカイブに <span class=\"mono\">.sha256</span> をペアで同梱。ソースからもインストールできます：MSRV 1.80、依存は一つ、unsafe なし。",
   "bin": "プリビルドバイナリ",
   "fromSource": "ソースから",
   "releases": "全リリースとチェックサム"
  },
  "footer": {
   "line": "MIT ライセンス。moltdisk は監査のみ、削除はしません。"
  },
  "cmp": {
   "title": "名前で動く道具と、根拠で語る道具",
   "lede": "違いは速さではなく、あとで何を抱えるかにある。",
   "th1": "やり方",
   "th2": "何で判断するか",
   "th3": "あとで負うもの",
   "r1b": "覚えているパス",
   "r1c": "忘れた分は残り、間違えた分はソースごと消える",
   "r2n": "名前で拾うスキャナ",
   "r2b": "名前だけ",
   "r2c": "target という名のソースフォルダも数えられる",
   "r3b": "名前＋同階層のマーカー＋見かけのバイト数",
   "r3c": "根拠つきの一覧。消すかどうかはあなたが決める"
  },
  "json": {
   "title": "jq に流すか、CI に流すか",
   "lede": "<code>--json</code> は同じ結論をフィールドで出す。色も進捗もなく、パイプでそのまま使える。",
   "note": "スキーマはこれだけ。サイズはバイト、時刻は Unix 秒。",
   "ci": "<code>--jobs</code> は計測スレッド数。<code>--no-color</code> はリダイレクト時に自動で効く。",
   "cmt1": "# 1 GB を超えるものだけ、サイズ順に",
   "cmt2": "# CI：閾値を超えたらパイプラインを落とす"
  },
  "faq": {
   "title": "たぶん聞きたい六つのこと",
   "lede": "答えはコードにあり、文言にはない。",
   "q1": "何か消されますか？",
   "a1": "いいえ。0.1.0 に delete モジュールも remove_dir_all もありません。<code>-y</code> はハードエラーで終了コード 2。",
   "q2": "なぜ dist/、build/、bin/、venv/ が既定に入らない？",
   "a2": "多くのテンプレートがソース用に使う名前だからです。<code>-k all</code> で入れるなら、判断もあなたのものになります。",
   "q3": "なぜシンボリックリンクを辿らない？",
   "a3": "リンクで指定したルートの外へ出ないため、同じデータを二重に数えないためです。",
   "q4": "なぜ du と数字が違う？",
   "a4": "moltdisk はファイルの見かけのバイト数、<code>du</code> はディスク上のブロック数を見ます。",
   "q5": "入れ子の node_modules は二重計上されますか？",
   "a5": "いいえ。外側を飛ばすので、各バイトは一度だけ数えます。",
   "q6": "watch、設定ファイル、ログはありますか？",
   "a6": "まだありません。0.1.0 は一度きりの監査のみ。三つとも計画中で未公開です。"
  }
 },
 "ko": {
  "meta": {
   "title": "moltdisk · 蜕冗 — 다시 빌드할 수 있는 것을 찾고, 나머지는 당신에게",
   "desc": "moltdisk는 프로젝트를 훑으며 소스에서 다시 빌드할 수 있는 산출물（node_modules, target, dist, venv）을 측정·정리하고 각 판정의 근거를 보여 줍니다. 아무것도 삭제하지 않습니다.",
   "native": "한국어"
  },
  "ui": {
   "skip": "본문으로 건너뛰기",
   "copy": "복사",
   "copied": "복사됨",
   "langLabel": "언어",
   "toDark": "다크",
   "toLight": "라이트"
  },
  "gauge": {
   "why": "삭제하지 않는 이유",
   "verdict": "판정",
   "rulebook": "규칙집",
   "limits": "경계",
   "install": "설치",
   "compare": "비교",
   "json": "기계 판독",
   "faq": "자주 묻는 질문"
  },
  "hero": {
   "t1": "다시 만들 수 있는 것을 찾고,",
   "t2": "나머지는 당신에게",
   "lede": "moltdisk는 프로젝트를 훑으며 소스에서 다시 빌드할 수 있는 산출물——node_modules, target, dist, venv——을 측정하고, 순위를 매기고, 각 판정의 근거를 보여 줍니다. 그다음 멈춥니다. 이 빌드에는 삭제 코드가 없습니다.",
   "cta1": "설치하기",
   "cta2": "소스 읽기",
   "cta3": "판정이 어떻게 내려지는지 보기",
   "caption": "실제 출력입니다. 마지막 줄은 마케팅이 아니라 프로그램의 마지막 행동입니다. 보고서를 받는 사람이 지울지 말지 정합니다."
  },
  "why": {
   "title": "초기 버전은 삭제할 수 있었다. 그래서 삭제를 제거했다",
   "p1": "초기 내부 빌드는 삭제할 수 있었습니다. 가드가 있었습니다: 디렉터리 이름과 같은 층의 마커가 모두 일치할 때만——<span class=\"mono\">target/</span> 옆에는 <span class=\"mono\">Cargo.toml</span>, <span class=\"mono\">vendor/</span> 옆에는 <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> 옆에는 <span class=\"mono\">Podfile</span>. 심볼릭 링크, 홈 디렉터리, 주어진 루트 밖은 거부했습니다.",
   "p2": "가드는 좋았지만 충분하지 않았습니다. 휴리스틱으로 남의 빌드 디렉터리를 지우는 도구는 언젠가 잘못된 것을 지웁니다. 그리고 키보드를 누르는 사람은 휴리스틱을 만든 사람이 아닙니다. 그래서 공개되기 전에 삭제 기능은 통째로 제거됐습니다.",
   "p3": "남은 것은 처음부터 흥미로운 부분이었습니다: 판정, 그리고 그것을 공개된 상태로 보여 주는 것. 지우고 싶다면 moltdisk가 건네는 목록으로 직접 지우세요. 당신은 당신의 프로젝트를 압니다. moltdisk는 규칙집만 압니다.",
   "noteTitle": "자체 검증"
  },
  "verdict": {
   "title": "판정에는 두 가지가 필요하다: 이름과 마커",
   "lede": "이름은 증거가 아닙니다.<span class=\"mono\">target/</span>은 평범한 영어 단어이고, target이라는 이름의 폴더가 소스 파일로 가득해도 빌드 산출물은 아닙니다. 그래서 모든 규칙은 두 가지를 요구합니다: 이름이 일치하고, 진짜 프로젝트만이 가진 같은 층의 마커가 존재할 것. 하나를 골라 양쪽이 어떻게 검사되는지 보세요.",
   "hint": "<code>moltdisk why &lt;path&gt;</code>는 이 양쪽을 그대로 출력합니다. 아무것도 일치하지 않았을 때 찾고 있던 마커까지 포함해서요.",
   "pathLabel": "경로",
   "nameLabel": "일치한 이름",
   "markerLabel": "검사한 마커",
   "kindLabel": "종류",
   "verdictLabel": "판정"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "이름 자체가 명확함——마커 불필요"
    ],
    "verdict": "다시 빌드 가능",
    "note": "이름만으로 확정되는 규칙: node_modules는 패키지 매니저만 만듭니다."
   },
   {
    "tab": "target, 마커 없음",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——없음",
     "pom.xml / build.gradle——없음"
    ],
    "verdict": "빌드 산출물 아님",
    "note": "이름은 일치했지만 어떤 마커도 충족되지 않았습니다. 이름만으로는 증거가 될 수 없습니다."
   },
   {
    "tab": "target, Cargo.toml 있음",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——있음"
    ],
    "verdict": "다시 빌드 가능",
    "note": "cargo build가 전부 다시 생성합니다. 그 「다시 빌드하는 방법」 줄이 바로 실제 논거입니다."
   }
  ],
  "rulebook": {
   "title": "규칙집은 <span class=\"mono\">moltdisk kinds</span> 안에 살아 있다",
   "lede": "각 규칙 뒤에는 「다시 빌드하는 방법」 줄이 따라옵니다——디렉터리가 버려질 수 있는 실제 이유이므로, 출력의 일부이며 문서의 부록이 아닙니다.",
   "th": {
    "kind": "종류",
    "names": "일치하는 이름",
    "marker": "필요한 마커",
    "on": "기본"
   },
   "on": "포함",
   "off": "수동 지정",
   "none": "불필요（이름 자체가 명확함）",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span>, <span class=\"mono\">venv/</span>는 의도적으로 기본 집합에 넣지 않았습니다: 너무 많은 프로젝트 템플릿이 이 이름들을 소스에 씁니다. 보고서의 오탐은 싸고, 삭제의 오탐은 싸지 않습니다——그리고 보고서는 삭제 명령에 복붙되기 마련입니다."
  },
  "limits": {
   "title": "자신이 무엇을 모르는지 알고 있다",
   "i1": "심볼릭 링크는 추적하지도, 계수하지도 않습니다——스캔은 링크를 통해 루트 밖으로 나갈 수 없습니다.",
   "i2": "기본 깊이는 8입니다.<span class=\"mono\">node_modules</span> 안에 중첩된 <span class=\"mono\">node_modules</span>는 건너뛰므로 숫자가 두 번 세어지지 않습니다.",
   "i3": "크기는 겉보기 크기（파일의 바이트）이며 디스크 블록이 아닙니다.<span class=\"mono\">du</span>는 다르게 나올 수 있습니다.<span class=\"mono\">du</span>는 다른 것을 측정하기 때문입니다.",
   "i4": "루트에 lockfile이 하나뿐인 monorepo도 workspace마다 별도 판정을 받습니다. 각 <span class=\"mono\">node_modules</span>가 따로 측정되기 때문입니다."
  },
  "install": {
   "title": "하나 설치하고, 당신 자신에게 돌려 보세요",
   "lede": "각 릴리스에 미리 빌드된 바이너리를 첨부하고, 각 아카이브에 <span class=\"mono\">.sha256</span>을 함께 넣습니다. 소스에서도 설치할 수 있습니다: MSRV 1.80, 의존성 하나, unsafe 없음.",
   "bin": "미리 빌드된 바이너리",
   "fromSource": "소스에서",
   "releases": "모든 릴리스와 체크섬"
  },
  "footer": {
   "line": "MIT 라이선스. moltdisk는 감사만 하고 삭제하지 않습니다."
  },
  "cmp": {
   "title": "이름으로 움직이는 도구와 근거로 말하는 도구",
   "lede": "차이는 속도가 아니라 나중에 무엇을 떠안는가에 있다.",
   "th1": "방식",
   "th2": "무엇으로 판단하나",
   "th3": "나중에 감당할 것",
   "r1b": "기억하고 있는 경로",
   "r1c": "잊은 것은 남고, 잘못 기억한 것은 소스까지 데려간다",
   "r2n": "이름으로 훑는 스캐너",
   "r2b": "이름 하나뿐",
   "r2c": "target이라는 이름의 소스 폴더도 함께 포함된다",
   "r3b": "이름 + 같은 위치의 표식 + 겉보기 바이트",
   "r3c": "근거가 붙은 목록. 지울지는 당신이 정한다"
  },
  "json": {
   "title": "jq로 보내거나 CI로 보내기",
   "lede": "<code>--json</code>은 같은 결론을 필드로 씁니다. 색도 진행 표시도 없어 파이프에서 그대로 씁니다.",
   "note": "스키마는 이게 전부입니다. 크기는 바이트, 시각은 유닉스 초.",
   "ci": "<code>--jobs</code>는 측정 스레드 수이고, <code>--no-color</code>는 출력을 리다이렉트하면 자동으로 적용됩니다.",
   "cmt1": "# 1 GB 넘는 것만, 크기 순으로",
   "cmt2": "# CI: 임계값을 넘으면 파이프라인 실패"
  },
  "faq": {
   "title": "아마 묻고 싶을 여섯 가지",
   "lede": "답은 코드에 있고 문구에는 없습니다.",
   "q1": "제 파일을 지우나요?",
   "a1": "아닙니다. 0.1.0에는 delete 모듈도 remove_dir_all도 없습니다. <code>-y</code>는 강제 오류, 종료 코드 2.",
   "q2": "dist/, build/, bin/, venv/가 기본 집합에 없는 이유는?",
   "a2": "템플릿이 그 이름을 소스로 너무 많이 씁니다. <code>-k all</code>로 넣으면 판단도 당신 몫이 됩니다.",
   "q3": "심볼릭 링크를 따라가지 않는 이유는?",
   "a3": "링크로 지정한 루트 밖으로 나가지 않고, 같은 바이트를 두 번 세지 않기 위해서입니다.",
   "q4": "du와 숫자가 다른 이유는?",
   "a4": "moltdisk는 파일의 겉보기 바이트를, <code>du</code>는 디스크 블록을 셉니다.",
   "q5": "중첩된 node_modules가 중복 계산되나요?",
   "a5": "아닙니다. 바깥 것을 건너뛰어 바이트마다 한 번만 셉니다.",
   "q6": "watch, 설정 파일, 로그가 있나요?",
   "a6": "아직 없습니다. 0.1.0은 한 번짜리 감사뿐이고 셋 다 계획 중입니다."
  }
 },
 "es": {
  "meta": {
   "title": "moltdisk · 蜕冗 — encuentra lo que se reconstruye, deja el resto en paz",
   "desc": "moltdisk recorre tus proyectos, mide el output de build que puede reconstruirse desde el código —node_modules, target, dist, venv— lo ordena y muestra la evidencia de cada veredicto. Nunca borra nada.",
   "native": "Español"
  },
  "ui": {
   "skip": "Saltar al contenido",
   "copy": "Copiar",
   "copied": "Copiado",
   "langLabel": "Idioma",
   "toDark": "Oscuro",
   "toLight": "Claro"
  },
  "gauge": {
   "why": "Por qué no borra",
   "verdict": "El veredicto",
   "rulebook": "El libro de reglas",
   "limits": "Límites",
   "install": "Instalación",
   "compare": "Comparativa",
   "json": "Legible",
   "faq": "Preguntas"
  },
  "hero": {
   "t1": "Encuentra lo que se reconstruye,",
   "t2": "deja el resto en paz",
   "lede": "moltdisk recorre tus proyectos, mide el output de build que puede reconstruirse desde el código —node_modules, target, dist, venv— lo ordena y muestra la evidencia detrás de cada veredicto. Luego se detiene. Esta build no tiene código de borrado.",
   "cta1": "Instalar",
   "cta2": "Leer el código",
   "cta3": "Ver cómo se emite un veredicto",
   "caption": "Salida real. Esa última línea no es marketing: es el último acto del programa. El informe va para quien decide."
  },
  "why": {
   "title": "Una build temprana podía borrar, así que quitamos el borrado",
   "p1": "Una build interna temprana sí podía. Tenía salvaguardas: un directorio contaba solo cuando coincidían el nombre y un marcador hermano——<span class=\"mono\">target/</span> necesitaba un <span class=\"mono\">Cargo.toml</span> al lado, <span class=\"mono\">vendor/</span> un <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> un <span class=\"mono\">Podfile</span>. Rechazaba enlaces simbólicos, el directorio home y cualquier cosa fuera de las raíces dadas.",
   "p2": "Las salvaguardas eran buenas, y no bastaban. Una herramienta que borra directorios de build ajenos por heurística borrará algo equivocado algún día, y quien apriete la tecla no será quien escribió la heurística. Así que el borrado se eliminó antes de publicar.",
   "p3": "Queda la parte que siempre fue interesante: el juicio, mostrado a la vista. Si quieres borrar, hazlo tú, con la lista que moltdisk te entrega. Tú conoces tus proyectos; moltdisk solo conoce su libro de reglas.",
   "noteTitle": "Autoverificación"
  },
  "verdict": {
   "title": "Un veredicto necesita dos cosas: un nombre y un marcador",
   "lede": "Un nombre no es evidencia. <span class=\"mono\">target/</span> es una palabra inglesa corriente, y una carpeta llamada target llena de código no es output de build. Por eso cada regla exige dos cosas: que el nombre coincida y que exista un marcador hermano que solo un proyecto real de ese tipo tendría. Elige un caso y mira cómo se comprueban las dos mitades.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> imprime ambas mitades al pie de la letra, incluidos los marcadores que buscaba cuando nada coincidió.",
   "pathLabel": "ruta",
   "nameLabel": "nombre coincidente",
   "markerLabel": "marcadores revisados",
   "kindLabel": "tipo",
   "verdictLabel": "veredicto"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "nombre inequívoco——no se necesita marcador"
    ],
    "verdict": "Reconstruible",
    "note": "Regla de nombre solo: node_modules solo lo produce un gestor de paquetes."
   },
   {
    "tab": "target, sin marcador",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——no encontrado",
     "pom.xml / build.gradle——no encontrado"
    ],
    "verdict": "No es output de build",
    "note": "El nombre coincidió, pero ningún marcador se satisfizo. El nombre solo no es evidencia."
   },
   {
    "tab": "target, con Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——encontrado"
    ],
    "verdict": "Reconstruible",
    "note": "cargo build lo regenera por completo. La línea de reconstrucción es el argumento real."
   }
  ],
  "rulebook": {
   "title": "El libro de reglas vive en <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Cada regla lleva una línea de reconstrucción——el argumento real de por qué un directorio es prescindible——así que es parte de la salida, no una nota al pie de la documentación.",
   "th": {
    "kind": "Tipo",
    "names": "Nombres que reconoce",
    "marker": "Marcador requerido",
    "on": "Por defecto"
   },
   "on": "incluido",
   "off": "opcional",
   "none": "ninguno——el nombre es inequívoco",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> y <span class=\"mono\">venv/</span> quedan deliberadamente fuera del conjunto por defecto: demasiadas plantillas usan esos nombres para código. Un falso positivo en un informe es barato; en un borrado no lo es——y los informes se pegan en comandos de borrado."
  },
  "limits": {
   "title": "Sabe lo que no entiende",
   "i1": "Los enlaces simbólicos nunca se siguen ni se cuentan: un escaneo no puede salir de una raíz a través de un enlace.",
   "i2": "La profundidad por defecto es 8. Un <span class=\"mono\">node_modules</span> anidado dentro de otro se omite, así que los números no se cuentan dos veces.",
   "i3": "Los tamaños son tamaño aparente——los bytes de los archivos——no bloques en disco. <span class=\"mono\">du</span> puede discrepar; <span class=\"mono\">du</span> está midiendo otra cosa.",
   "i4": "Un monorepo con un único lockfile en la raíz recibe igualmente un veredicto por workspace, porque cada <span class=\"mono\">node_modules</span> se mide por separado."
  },
  "install": {
   "title": "Instala uno y pruébalo en ti mismo",
   "lede": "Cada release incluye binarios precompilados, cada archivo con su <span class=\"mono\">.sha256</span>. O desde el código: MSRV 1.80, una dependencia, sin unsafe.",
   "bin": "Binarios precompilados",
   "fromSource": "Desde el código",
   "releases": "Todas las versiones y sumas"
  },
  "footer": {
   "line": "Licencia MIT. moltdisk audita; no borra."
  },
  "cmp": {
   "title": "Otras herramientas actúan por el nombre. Esta actúa por la evidencia.",
   "lede": "La diferencia no es la velocidad, sino con qué te quedas después.",
   "th1": "Enfoque",
   "th2": "Con qué decide",
   "th3": "Lo que te cuesta después",
   "r1b": "La ruta que recuerdas",
   "r1c": "Lo olvidado se queda; lo mal recordado se lleva el código",
   "r2n": "Un rastreador que casa nombres",
   "r2b": "Solo el nombre",
   "r2c": "Una carpeta de código llamada target también cuenta",
   "r3b": "Nombre, marcador vecino, bytes aparentes",
   "r3c": "Una lista con sus razones; la decisión sigue siendo tuya"
  },
  "json": {
   "title": "Llévalo a jq o a CI",
   "lede": "<code>--json</code> escribe el mismo veredicto como campos: sin color, sin progreso, listo para una tubería.",
   "note": "Ese es todo el esquema. Los tamaños van en bytes y las fechas en segundos Unix.",
   "ci": "<code>--jobs</code> fija los hilos de medición; <code>--no-color</code> ya se activa al redirigir la salida.",
   "cmt1": "# solo lo que pasa de 1 GB, por tamaño",
   "cmt2": "# CI: falla el pipeline si pasa el umbral"
  },
  "faq": {
   "title": "Seis cosas que probablemente vas a preguntar",
   "lede": "Las respuestas están en el código, no en las palabras.",
   "q1": "¿Va a borrar algo mío?",
   "a1": "No. La 0.1.0 no tiene módulo delete ni remove_dir_all. <code>-y</code> es un error duro, código de salida 2.",
   "q2": "¿Por qué dist/, build/, bin/ y venv/ no están por defecto?",
   "a2": "Porque demasiadas plantillas usan esos nombres para código. Actívalos con <code>-k all</code> y el juicio pasa a ser tuyo.",
   "q3": "¿Por qué no sigue enlaces simbólicos?",
   "a3": "Para que un enlace no salga de la raíz que diste y para no contar los mismos bytes dos veces.",
   "q4": "¿Por qué no coincide con du?",
   "a4": "moltdisk mide los bytes aparentes de los archivos; <code>du</code> mide los bloques del disco.",
   "q5": "¿Se cuentan dos veces los node_modules anidados?",
   "a5": "No. Se omite el exterior, así que cada byte se cuenta una vez.",
   "q6": "¿Hay watch, archivo de configuración o registro?",
   "a6": "Todavía no. La 0.1.0 hace una sola auditoría; las tres están planeadas y sin publicar."
  }
 },
 "fr": {
  "meta": {
   "title": "moltdisk · 蜕冗 — trouvez ce qui se reconstruit, laissez le reste tranquille",
   "desc": "moltdisk parcourt vos projets, mesure ce qui peut être reconstruit depuis le code —node_modules, target, dist, venv— le classe et montre les preuves derrière chaque verdict. Il ne supprime jamais rien.",
   "native": "Français"
  },
  "ui": {
   "skip": "Aller au contenu",
   "copy": "Copier",
   "copied": "Copié",
   "langLabel": "Langue",
   "toDark": "Sombre",
   "toLight": "Clair"
  },
  "gauge": {
   "why": "Pourquoi pas un suppresseur",
   "verdict": "Le verdict",
   "rulebook": "Le livre de règles",
   "limits": "Limites",
   "install": "Installation",
   "compare": "Comparaison",
   "json": "Lisible",
   "faq": "Questions"
  },
  "hero": {
   "t1": "Trouvez ce qui se reconstruit,",
   "t2": "laissez le reste tranquille",
   "lede": "moltdisk parcourt vos projets, mesure ce qui peut être reconstruit depuis le code——node_modules, target, dist, venv——le classe et montre les preuves derrière chaque verdict. Puis il s'arrête. Cette build n'a aucun chemin de suppression.",
   "cta1": "Installer",
   "cta2": "Lire le code",
   "cta3": "Voir comment un verdict est rendu",
   "caption": "Sortie réelle. Cette dernière ligne n'est pas du marketing : c'est le dernier geste du programme. Le rapport va à celui qui décide."
  },
  "why": {
   "title": "Une version précoce pouvait supprimer, alors nous avons retiré la suppression",
   "p1": "Une version interne précoce le pouvait. Avec des garde-fous : un dossier ne comptait que si le nom et un marqueur voisin correspondaient——<span class=\"mono\">target/</span> exigeait un <span class=\"mono\">Cargo.toml</span> à côté, <span class=\"mono\">vendor/</span> un <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> un <span class=\"mono\">Podfile</span>. Il refusait les liens symboliques, le dossier home et tout ce qui sortait des racines données.",
   "p2": "Les garde-fous étaient bons, et insuffisants. Un outil qui supprime les dossiers de build des autres par heuristique supprimera un jour la mauvaise chose, et celui qui appuie sur la touche ne sera pas celui qui a écrit l'heuristique. Alors la suppression a été retirée avant la publication.",
   "p3": "Reste la partie toujours intéressante : le jugement, montré au grand jour. Si vous voulez supprimer, faites-le vous-même, avec la liste que moltdisk vous tend. Vous connaissez vos projets ; moltdisk ne connaît que son livre de règles.",
   "noteTitle": "Auto-vérification"
  },
  "verdict": {
   "title": "Un verdict exige deux choses : un nom et un marqueur",
   "lede": "Un nom n'est pas une preuve. <span class=\"mono\">target/</span> est un mot anglais ordinaire, et un dossier nommé target rempli de code n'est pas un output de build. Chaque règle exige donc deux choses : le nom correspond, et un marqueur voisin existe, que seul un vrai projet de ce genre posséderait. Choisissez un cas et regardez les deux moitiés être vérifiées.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> imprime les deux moitiés telles quelles, y compris les marqueurs cherchés quand rien ne correspondait.",
   "pathLabel": "chemin",
   "nameLabel": "nom correspondant",
   "markerLabel": "marqueurs vérifiés",
   "kindLabel": "type",
   "verdictLabel": "verdict"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "nom sans ambiguïté——pas de marqueur"
    ],
    "verdict": "Reconstructible",
    "note": "Règle au nom seul : node_modules n'est produit que par un gestionnaire de paquets."
   },
   {
    "tab": "target, sans marqueur",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——introuvable",
     "pom.xml / build.gradle——introuvable"
    ],
    "verdict": "Pas un output de build",
    "note": "Le nom correspondait, mais aucun marqueur n'a été satisfait. Le nom seul n'est pas une preuve."
   },
   {
    "tab": "target, avec Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——trouvé"
    ],
    "verdict": "Reconstructible",
    "note": "cargo build le régénère entièrement. La ligne de reconstruction est l'argument réel."
   }
  ],
  "rulebook": {
   "title": "Le livre de règles vit dans <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Chaque règle porte une ligne de reconstruction——l'argument réel pour lequel un dossier est jetable——elle fait donc partie de la sortie, pas une note en bas des docs.",
   "th": {
    "kind": "Type",
    "names": "Noms reconnus",
    "marker": "Marqueur requis",
    "on": "Défaut"
   },
   "on": "inclus",
   "off": "sur demande",
   "none": "aucun——le nom est sans ambiguïté",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> et <span class=\"mono\">venv/</span> sont délibérément hors de l'ensemble par défaut : trop de gabarits utilisent ces noms pour du code. Un faux positif dans un rapport est bon marché ; dans une suppression, non——et les rapports sont copiés dans les commandes de suppression."
  },
  "limits": {
   "title": "Il sait ce qu'il ne comprend pas",
   "i1": "Les liens symboliques ne sont jamais suivis ni comptés : un scan ne peut pas sortir d'une racine par un lien.",
   "i2": "La profondeur par défaut est 8. Un <span class=\"mono\">node_modules</span> imbriqué dans un autre est ignoré, les nombres ne sont pas comptés deux fois.",
   "i3": "Les tailles sont la taille apparente——les octets des fichiers——pas les blocs sur disque. <span class=\"mono\">du</span> peut diverger ; <span class=\"mono\">du</span> mesure autre chose.",
   "i4": "Un monorepo avec un seul lockfile à la racine reçoit quand même un verdict par workspace, car chaque <span class=\"mono\">node_modules</span> est mesuré séparément."
  },
  "install": {
   "title": "Installez-en un, puis exécutez-le sur vous-même",
   "lede": "Chaque release embarque des binaires précompilés, chaque archive jumelée à un <span class=\"mono\">.sha256</span>. Ou depuis le code : MSRV 1.80, une dépendance, sans unsafe.",
   "bin": "Binaires précompilés",
   "fromSource": "Depuis le code",
   "releases": "Toutes les versions et sommes"
  },
  "footer": {
   "line": "Licence MIT. moltdisk audite ; il ne supprime pas."
  },
  "cmp": {
   "title": "D'autres agissent sur un nom. Ici, on agit sur des preuves.",
   "lede": "La différence n'est pas la vitesse, mais ce qu'il te reste après.",
   "th1": "Approche",
   "th2": "Sur quoi il juge",
   "th3": "Ce que tu assumes après",
   "r1b": "Le chemin dont tu te souviens",
   "r1c": "L'oublié reste ; le mal mémorisé emporte les sources",
   "r2n": "Un balayeur qui reconnaît les noms",
   "r2b": "Le nom seul",
   "r2c": "Un dossier de sources nommé target compte aussi",
   "r3b": "Nom, marqueur voisin, octets apparents",
   "r3c": "Une liste motivée ; la décision reste la tienne"
  },
  "json": {
   "title": "Branche-le sur jq, ou sur la CI",
   "lede": "<code>--json</code> écrit le même verdict en champs : sans couleur, sans progression, utilisable dans un tube.",
   "note": "C'est tout le schéma. Les tailles sont en octets, les dates en secondes Unix.",
   "ci": "<code>--jobs</code> règle les threads de mesure ; <code>--no-color</code> s'active déjà quand la sortie est redirigée.",
   "cmt1": "# seulement au-delà de 1 Go, par taille",
   "cmt2": "# CI : échouer le pipeline au-delà du seuil"
  },
  "faq": {
   "title": "Six questions que tu vas sûrement poser",
   "lede": "Les réponses sont dans le code, pas dans la formulation.",
   "q1": "Est-ce que ça supprime quelque chose chez moi ?",
   "a1": "Non. La 0.1.0 n'a ni module delete ni remove_dir_all. <code>-y</code> est une erreur ferme, code de sortie 2.",
   "q2": "Pourquoi dist/, build/, bin/ et venv/ ne sont pas inclus par défaut ?",
   "a2": "Trop de modèles les utilisent pour les sources. Ajoute <code>-k all</code>, et le jugement redevient le tien.",
   "q3": "Pourquoi ne pas suivre les liens symboliques ?",
   "a3": "Pour qu'un lien ne sorte pas de la racine donnée et que les mêmes octets ne soient pas comptés deux fois.",
   "q4": "Pourquoi l'écart avec du ?",
   "a4": "moltdisk mesure les octets apparents des fichiers ; <code>du</code> mesure les blocs du disque.",
   "q5": "Les node_modules imbriqués sont-ils comptés deux fois ?",
   "a5": "Non. L'extérieur est ignoré, chaque octet n'est compté qu'une fois.",
   "q6": "Y a-t-il un mode watch, un fichier de config, des logs ?",
   "a6": "Pas encore. La 0.1.0 fait un audit unique ; les trois sont prévus, non publiés."
  }
 },
 "de": {
  "meta": {
   "title": "moltdisk · 蜕冗 — finde, was sich neu bauen lässt, lass den Rest in Ruhe",
   "desc": "moltdisk durchläuft deine Projekte, misst Build-Ausgaben, die sich aus dem Quellcode neu bauen lassen —node_modules, target, dist, venv—, sortiert sie und zeigt die Belege hinter jedem Urteil. Es löscht nie etwas.",
   "native": "Deutsch"
  },
  "ui": {
   "skip": "Zum Inhalt springen",
   "copy": "Kopieren",
   "copied": "Kopiert",
   "langLabel": "Sprache",
   "toDark": "Dunkel",
   "toLight": "Hell"
  },
  "gauge": {
   "why": "Warum kein Löscher",
   "verdict": "Das Urteil",
   "rulebook": "Das Regelbuch",
   "limits": "Grenzen",
   "install": "Installation",
   "compare": "Vergleich",
   "json": "Maschinenlesbar",
   "faq": "Fragen"
  },
  "hero": {
   "t1": "Finde, was sich neu bauen lässt,",
   "t2": "lass den Rest in Ruhe",
   "lede": "moltdisk durchläuft deine Projekte, misst Build-Ausgaben, die sich aus dem Quellcode neu bauen lassen——node_modules, target, dist, venv——, sortiert sie und zeigt die Belege hinter jedem Urteil. Dann hält es an. Dieser Build hat keinen Löschpfad.",
   "cta1": "Installieren",
   "cta2": "Quellcode lesen",
   "cta3": "Sehen, wie ein Urteil entsteht",
   "caption": "Echte Ausgabe. Diese letzte Zeile ist kein Marketing——sie ist die letzte Handlung des Programms. Der Bericht geht an den, der entscheidet."
  },
  "why": {
   "title": "Eine frühe Version konnte löschen, also entfernten wir das Löschen",
   "p1": "Eine frühe interne Version konnte es. Mit Schutzvorrichtungen: ein Ordner zählte nur, wenn Name und ein benachbarter Marker beide passten——<span class=\"mono\">target/</span> brauchte ein <span class=\"mono\">Cargo.toml</span> daneben, <span class=\"mono\">vendor/</span> ein <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> ein <span class=\"mono\">Podfile</span>. Symlinks, das Home-Verzeichnis und alles außerhalb der angegebenen Wurzeln wurden abgelehnt.",
   "p2": "Die Schutzvorrichtungen waren gut und nicht genug. Ein Werkzeug, das fremde Build-Ordner per Heuristik löscht, wird eines Tages das Falsche löschen, und der, der die Taste drückt, wird nicht der sein, der die Heuristik schrieb. Also wurde das Löschen vor der Veröffentlichung entfernt.",
   "p3": "Übrig bleibt der Teil, der immer schon interessant war: das Urteil, offen gezeigt. Wenn du löschen willst, tu es selbst, mit der Liste, die moltdisk dir reicht. Du kennst deine Projekte; moltdisk kennt nur sein Regelbuch.",
   "noteTitle": "Selbstprüfung"
  },
  "verdict": {
   "title": "Ein Urteil braucht zwei Dinge: einen Namen und einen Marker",
   "lede": "Ein Name ist kein Beleg. <span class=\"mono\">target/</span> ist ein gewöhnliches englisches Wort, und ein Ordner namens target voller Quellcode ist keine Build-Ausgabe. Jede Regel verlangt also zweierlei: der Name passt, und ein benachbarter Marker existiert, den nur ein echtes Projekt dieser Art hätte. Wähle einen Fall und sieh zu, wie beide Hälften geprüft werden.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> druckt beide Hälften wörtlich, einschließlich der Marker, nach denen es suchte, als nichts passte.",
   "pathLabel": "Pfad",
   "nameLabel": "passender Name",
   "markerLabel": "geprüfte Marker",
   "kindLabel": "Art",
   "verdictLabel": "Urteil"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "eindeutiger Name——kein Marker nötig"
    ],
    "verdict": "Neu baubar",
    "note": "Nur-Name-Regel: node_modules erzeugt ausschließlich ein Paketmanager."
   },
   {
    "tab": "target, ohne Marker",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——nicht gefunden",
     "pom.xml / build.gradle——nicht gefunden"
    ],
    "verdict": "Keine Build-Ausgabe",
    "note": "Der Name passte, aber kein Marker war erfüllt. Der Name allein ist kein Beleg."
   },
   {
    "tab": "target, mit Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——gefunden"
    ],
    "verdict": "Neu baubar",
    "note": "cargo build regeneriert alles davon. Die Rebuild-Zeile ist das eigentliche Argument."
   }
  ],
  "rulebook": {
   "title": "Das Regelbuch lebt in <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Jede Regel trägt eine Rebuild-Zeile——das eigentliche Argument, warum ein Ordner entbehrlich ist——also gehört sie zur Ausgabe, nicht in eine Fußnote der Doku.",
   "th": {
    "kind": "Art",
    "names": "Erkannte Namen",
    "marker": "Erforderlicher Marker",
    "on": "Standard"
   },
   "on": "enthalten",
   "off": "optional",
   "none": "keine——der Name ist eindeutig",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> und <span class=\"mono\">venv/</span> sind bewusst nicht in der Standardmenge: zu viele Projektvorlagen nutzen diese Namen für Quellcode. Ein Fehlalarm im Bericht ist billig; einer beim Löschen nicht——und Berichte werden in Löschbefehle kopiert."
  },
  "limits": {
   "title": "Es weiß, was es nicht versteht",
   "i1": "Symlinks werden nie verfolgt und nie gezählt——ein Scan kann eine Wurzel nicht durch einen Link verlassen.",
   "i2": "Die Standardtiefe ist 8. Ein <span class=\"mono\">node_modules</span> innerhalb eines <span class=\"mono\">node_modules</span> wird übersprungen, sodass Zahlen nicht doppelt zählen.",
   "i3": "Größen sind die scheinbare Größe——die Bytes der Dateien——nicht Blöcke auf der Platte. <span class=\"mono\">du</span> mag abweichen; <span class=\"mono\">du</span> misst etwas anderes.",
   "i4": "Ein Monorepo mit einer einzigen Lockdatei an der Wurzel bekommt trotzdem ein Urteil pro Workspace, weil jedes <span class=\"mono\">node_modules</span> separat gemessen wird."
  },
  "install": {
   "title": "Installiere eines und führe es an dir selbst aus",
   "lede": "Jede Release enthält vorgebaute Binaries, jedes Archiv mit einer <span class=\"mono\">.sha256</span>. Oder aus dem Quellcode: MSRV 1.80, eine Abhängigkeit, kein unsafe.",
   "bin": "Vorgebaute Binaries",
   "fromSource": "Aus dem Quellcode",
   "releases": "Alle Versionen und Prüfsummen"
  },
  "footer": {
   "line": "MIT-Lizenz. moltdisk prüft; es löscht nicht."
  },
  "cmp": {
   "title": "Andere handeln nach Namen. Hier zählt der Beleg.",
   "lede": "Der Unterschied ist nicht das Tempo, sondern das, was du danach in der Hand hältst.",
   "th1": "Ansatz",
   "th2": "Woran es entscheidet",
   "th3": "Was du danach trägst",
   "r1b": "Der Pfad, an den du dich erinnerst",
   "r1c": "Vergessenes bleibt liegen, falsch Erinnertes nimmt Quellcode mit",
   "r2n": "Ein Scanner, der Namen trifft",
   "r2b": "Nur der Name",
   "r2c": "Ein Quellordner namens target zählt mit",
   "r3b": "Name, Nachbarmarker, scheinbare Bytes",
   "r3c": "Eine Liste mit Gründen; die Entscheidung bleibt deine"
  },
  "json": {
   "title": "In jq leiten, oder in die CI",
   "lede": "<code>--json</code> schreibt dasselbe Urteil als Felder: keine Farbe, kein Fortschritt, direkt für die Pipe.",
   "note": "Mehr Schema gibt es nicht. Größen in Bytes, Zeiten als Unix-Sekunden.",
   "ci": "<code>--jobs</code> setzt die Messthreads; <code>--no-color</code> greift schon, wenn die Ausgabe umgeleitet wird.",
   "cmt1": "# nur was über 1 GB liegt, nach Größe",
   "cmt2": "# CI: Pipeline über der Schwelle scheitern lassen"
  },
  "faq": {
   "title": "Sechs Dinge, die du wahrscheinlich fragen willst",
   "lede": "Die Antworten stehen im Code, nicht in der Formulierung.",
   "q1": "Löscht es etwas von mir?",
   "a1": "Nein. 0.1.0 hat kein delete-Modul und kein remove_dir_all. <code>-y</code> ist ein harter Fehler, Exit-Code 2.",
   "q2": "Warum sind dist/, build/, bin/ und venv/ nicht standardmäßig dabei?",
   "a2": "Zu viele Vorlagen nutzen diese Namen für Quellcode. Mit <code>-k all</code> nimmst du sie auf, dann urteilst du.",
   "q3": "Warum werden Symlinks nicht verfolgt?",
   "a3": "Damit ein Link nicht aus dem angegebenen Wurzelverzeichnis führt und dieselben Bytes nicht doppelt zählen.",
   "q4": "Warum weicht das von du ab?",
   "a4": "moltdisk zählt scheinbare Bytes in Dateien, <code>du</code> zählt Blöcke auf dem Datenträger.",
   "q5": "Werden verschachtelte node_modules doppelt gezählt?",
   "a5": "Nein. Das äußere wird übersprungen, jedes Byte zählt einmal.",
   "q6": "Gibt es watch, eine Konfigurationsdatei, Logs?",
   "a6": "Noch nicht. 0.1.0 macht einen einmaligen Audit; alle drei sind geplant, nichts davon veröffentlicht."
  }
 },
 "pt-BR": {
  "meta": {
   "title": "moltdisk · 蜕冗 — encontre o que se reconstrói, deixe o resto em paz",
   "desc": "moltdisk percorre seus projetos, mede a saída de build que pode ser reconstruída a partir do código —node_modules, target, dist, venv—, classifica e mostra a evidência por trás de cada veredito. Nunca apaga nada.",
   "native": "Português (BR)"
  },
  "ui": {
   "skip": "Pular para o conteúdo",
   "copy": "Copiar",
   "copied": "Copiado",
   "langLabel": "Idioma",
   "toDark": "Escuro",
   "toLight": "Claro"
  },
  "gauge": {
   "why": "Por que não apaga",
   "verdict": "O veredito",
   "rulebook": "O livro de regras",
   "limits": "Limites",
   "install": "Instalação",
   "compare": "Comparação",
   "json": "Legível",
   "faq": "Perguntas"
  },
  "hero": {
   "t1": "Encontre o que se reconstrói,",
   "t2": "deixe o resto em paz",
   "lede": "moltdisk percorre seus projetos, mede a saída de build que pode ser reconstruída a partir do código——node_modules, target, dist, venv——, classifica e mostra a evidência por trás de cada veredito. Então para. Este build não tem caminho de exclusão.",
   "cta1": "Instalar",
   "cta2": "Ler o código",
   "cta3": "Ver como um veredito é dado",
   "caption": "Saída real. Essa última linha não é marketing: é o último ato do programa. O relatório vai para quem decide."
  },
  "why": {
   "title": "Uma versão inicial podia apagar, então removemos a exclusão",
   "p1": "Uma versão interna inicial podia. Com proteções: um diretório só contava quando nome e um marcador irmão coincidiam——<span class=\"mono\">target/</span> precisava de um <span class=\"mono\">Cargo.toml</span> ao lado, <span class=\"mono\">vendor/</span> de um <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> de um <span class=\"mono\">Podfile</span>. Recusava links simbólicos, o diretório home e qualquer coisa fora das raízes dadas.",
   "p2": "As proteções eram boas, e não bastavam. Uma ferramenta que apaga diretórios de build alheios por heurística vai apagar a coisa errada um dia, e quem apertar a tecla não será quem escreveu a heurística. Então a exclusão foi removida antes de publicar.",
   "p3": "Resta a parte que sempre foi interessante: o julgamento, mostrado abertamente. Se quiser apagar, faça você mesmo, com a lista que moltdisk te entrega. Você conhece seus projetos; moltdisk só conhece seu livro de regras.",
   "noteTitle": "Autoverificação"
  },
  "verdict": {
   "title": "Um veredito precisa de duas coisas: um nome e um marcador",
   "lede": "Um nome não é evidência. <span class=\"mono\">target/</span> é uma palavra inglesa comum, e uma pasta chamada target cheia de código não é saída de build. Então cada regra exige duas coisas: o nome coincide, e existe um marcador irmão que só um projeto real daquele tipo teria. Escolha um caso e veja as duas metades sendo verificadas.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> imprime as duas metades literalmente, incluindo os marcadores que procurava quando nada coincidiu.",
   "pathLabel": "caminho",
   "nameLabel": "nome coincidente",
   "markerLabel": "marcadores verificados",
   "kindLabel": "tipo",
   "verdictLabel": "veredito"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "nome inequívoco——sem marcador"
    ],
    "verdict": "Reconstruível",
    "note": "Regra só de nome: node_modules só é produzido por um gerenciador de pacotes."
   },
   {
    "tab": "target, sem marcador",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——não encontrado",
     "pom.xml / build.gradle——não encontrado"
    ],
    "verdict": "Não é saída de build",
    "note": "O nome coincidiu, mas nenhum marcador foi satisfeito. O nome sozinho não é evidência."
   },
   {
    "tab": "target, com Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——encontrado"
    ],
    "verdict": "Reconstruível",
    "note": "cargo build regenera tudo. A linha de reconstrução é o argumento real."
   }
  ],
  "rulebook": {
   "title": "O livro de regras vive em <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Cada regra carrega uma linha de reconstrução——o argumento real de por que um diretório é dispensável——então ela é parte da saída, não uma nota de rodapé da documentação.",
   "th": {
    "kind": "Tipo",
    "names": "Nomes que reconhece",
    "marker": "Marcador exigido",
    "on": "Padrão"
   },
   "on": "incluído",
   "off": "opcional",
   "none": "nenhum——o nome é inequívoco",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> e <span class=\"mono\">venv/</span> ficam deliberadamente fora do conjunto padrão: muitos templates usam esses nomes para código. Um falso positivo num relatório é barato; numa exclusão, não——e relatórios são colados em comandos de exclusão."
  },
  "limits": {
   "title": "Ele sabe o que não entende",
   "i1": "Links simbólicos nunca são seguidos nem contados——uma varredura não sai de uma raiz através de um link.",
   "i2": "A profundidade padrão é 8. Um <span class=\"mono\">node_modules</span> aninhado dentro de outro é pulado, então os números não são contados duas vezes.",
   "i3": "Tamanhos são tamanho aparente——os bytes nos arquivos——não blocos no disco. <span class=\"mono\">du</span> pode discordar; <span class=\"mono\">du</span> está medindo outra coisa.",
   "i4": "Um monorepo com um único lockfile na raiz ainda recebe um veredito por workspace, porque cada <span class=\"mono\">node_modules</span> é medido separadamente."
  },
  "install": {
   "title": "Instale um e rode em você mesmo",
   "lede": "Cada release traz binários pré-compilados, cada arquivo com seu <span class=\"mono\">.sha256</span>. Ou a partir do código: MSRV 1.80, uma dependência, sem unsafe.",
   "bin": "Binários pré-compilados",
   "fromSource": "A partir do código",
   "releases": "Todas as versões e somas"
  },
  "footer": {
   "line": "Licença MIT. moltdisk audita; não apaga."
  },
  "cmp": {
   "title": "Outras ferramentas agem pelo nome. Esta age pela evidência.",
   "lede": "A diferença não é a velocidade, é com o que você fica depois.",
   "th1": "Abordagem",
   "th2": "Com o que decide",
   "th3": "O que você assume depois",
   "r1b": "O caminho que você lembra",
   "r1c": "O esquecido fica; o lembrado errado leva o código junto",
   "r2n": "Um scanner que casa nomes",
   "r2b": "Só o nome",
   "r2c": "Uma pasta de código chamada target também conta",
   "r3b": "Nome, marcador vizinho, bytes aparentes",
   "r3c": "Uma lista com motivos; a decisão continua sua"
  },
  "json": {
   "title": "Leve para o jq ou para a CI",
   "lede": "<code>--json</code> escreve o mesmo veredicto em campos: sem cor, sem progresso, pronto para um pipe.",
   "note": "O esquema é só isso. Tamanhos em bytes, horários em segundos Unix.",
   "ci": "<code>--jobs</code> define as threads de medição; <code>--no-color</code> já entra sozinho quando a saída é redirecionada.",
   "cmt1": "# só o que passa de 1 GB, por tamanho",
   "cmt2": "# CI: falhe o pipeline acima do limite"
  },
  "faq": {
   "title": "Seis coisas que você provavelmente vai perguntar",
   "lede": "As respostas estão no código, não no texto.",
   "q1": "Isso apaga algo meu?",
   "a1": "Não. A 0.1.0 não tem módulo delete nem remove_dir_all. <code>-y</code> é erro duro, código de saída 2.",
   "q2": "Por que dist/, build/, bin/ e venv/ não entram por padrão?",
   "a2": "Porque muitos templates usam esses nomes para código. Inclua com <code>-k all</code> e o julgamento passa a ser seu.",
   "q3": "Por que não seguir links simbólicos?",
   "a3": "Para que um link não saia da raiz informada e os mesmos bytes não sejam contados duas vezes.",
   "q4": "Por que não bate com o du?",
   "a4": "moltdisk mede os bytes aparentes dos arquivos; <code>du</code> mede os blocos do disco.",
   "q5": "node_modules aninhados contam duas vezes?",
   "a5": "Não. O de fora é ignorado, cada byte conta uma vez.",
   "q6": "Existe watch, arquivo de configuração, log?",
   "a6": "Ainda não. A 0.1.0 faz uma auditoria única; os três estão planejados, nenhum publicado."
  }
 },
 "ru": {
  "meta": {
   "title": "moltdisk · 蜕冗 — находи то, что пересобирается, остальное оставь",
   "desc": "moltdisk проходит по проектам, измеряет вывод сборки, который можно пересобрать из исходников (node_modules, target, dist, venv), сортирует его и показывает доказательства за каждым вердиктом. Ничего не удаляет.",
   "native": "Русский"
  },
  "ui": {
   "skip": "К содержанию",
   "copy": "Копировать",
   "copied": "Скопировано",
   "langLabel": "Язык",
   "toDark": "Тёмная",
   "toLight": "Светлая"
  },
  "gauge": {
   "why": "Почему не удаляет",
   "verdict": "Вердикт",
   "rulebook": "Свод правил",
   "limits": "Границы",
   "install": "Установка",
   "compare": "Сравнение",
   "json": "Машинный",
   "faq": "Вопросы"
  },
  "hero": {
   "t1": "Находи то, что пересобирается,",
   "t2": "остальное оставь в покое",
   "lede": "moltdisk проходит по твоим проектам, измеряет вывод сборки, который можно пересобрать из исходников——node_modules, target, dist, venv——сортирует и показывает доказательство за каждым вердиктом. Затем останавливается. В этой сборке нет кода удаления.",
   "cta1": "Установить",
   "cta2": "Читать код",
   "cta3": "Посмотреть, как выносится вердикт",
   "caption": "Реальный вывод. Последняя строка——не маркетинг: это последнее действие программы. Отчёт идёт тому, кто решает."
  },
  "why": {
   "title": "Ранняя версия могла удалять, поэтому удаление убрали",
   "p1": "Ранняя внутренняя версия могла. С защитами: каталог учитывался, только когда совпадали имя и соседний маркер——<span class=\"mono\">target/</span> требовал <span class=\"mono\">Cargo.toml</span> рядом, <span class=\"mono\">vendor/</span>——<span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span>——<span class=\"mono\">Podfile</span>. Символьные ссылки, домашний каталог и всё вне заданных корней отклонялись.",
   "p2": "Защиты были хороши, но недостаточны. Инструмент, который удаляет чужие каталоги сборки по эвристике, однажды удалит не то——и тот, кто нажмёт клавишу, не будет тем, кто написал эвристику. Поэтому удаление убрали до публикации.",
   "p3": "Осталась часть, которая всегда была интересной: суждение, показанное открыто. Хочешь удалять——удаляй сам, по списку, который даёт moltdisk. Ты знаешь свои проекты; moltdisk знает только свой свод правил.",
   "noteTitle": "Самопроверка"
  },
  "verdict": {
   "title": "Вердикт требует двух вещей: имени и маркера",
   "lede": "Имя——не доказательство. <span class=\"mono\">target/</span>——обычное английское слово, и папка с именем target, полная исходников,——не вывод сборки. Поэтому каждое правило требует двух вещей: имя совпало, и рядом есть маркер, который бывает только у настоящего проекта такого рода. Выбери случай и посмотри, как проверяются обе половины.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> печатает обе половины дословно, включая маркеры, которые искал, когда ничего не совпало.",
   "pathLabel": "путь",
   "nameLabel": "совпавшее имя",
   "markerLabel": "проверенные маркеры",
   "kindLabel": "тип",
   "verdictLabel": "вердикт"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "однозначное имя——маркер не нужен"
    ],
    "verdict": "Пересобираемо",
    "note": "Правило только по имени: node_modules создаёт лишь пакетный менеджер."
   },
   {
    "tab": "target, без маркера",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——не найден",
     "pom.xml / build.gradle——не найден"
    ],
    "verdict": "Не вывод сборки",
    "note": "Имя совпало, но ни один маркер не выполнен. Имя само по себе——не доказательство."
   },
   {
    "tab": "target, с Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——найден"
    ],
    "verdict": "Пересобираемо",
    "note": "cargo build пересоздаст всё это. Строка пересборки и есть настоящий аргумент."
   }
  ],
  "rulebook": {
   "title": "Свод правил живёт в <span class=\"mono\">moltdisk kinds</span>",
   "lede": "Каждое правило несёт строку пересборки——настоящий аргумент, почему каталог можно выбросить,——поэтому она часть вывода, а не сноска в документации.",
   "th": {
    "kind": "Тип",
    "names": "Совпадающие имена",
    "marker": "Нужный маркер",
    "on": "По умолчанию"
   },
   "on": "включён",
   "off": "по запросу",
   "none": "не нужен——имя однозначно",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> и <span class=\"mono\">venv/</span> сознательно не входят в набор по умолчанию: слишком много шаблонов используют эти имена для исходников. Ложное срабатывание в отчёте дёшево; в удалении——нет. А отчёты копируются в команды удаления."
  },
  "limits": {
   "title": "Он знает, чего не понимает",
   "i1": "Символьные ссылки никогда не отслеживаются и не считаются——сканирование не может выйти за корень через ссылку.",
   "i2": "Глубина по умолчанию——8. <span class=\"mono\">node_modules</span>, вложенный в <span class=\"mono\">node_modules</span>, пропускается, поэтому числа не считаются дважды.",
   "i3": "Размеры——кажущийся размер (байты в файлах), а не блоки на диске. <span class=\"mono\">du</span> может не согласиться; <span class=\"mono\">du</span> измеряет другое.",
   "i4": "Monorepo с одним lockfile в корне всё равно получает вердикт на каждый workspace, потому что каждый <span class=\"mono\">node_modules</span> измеряется отдельно."
  },
  "install": {
   "title": "Установи один и прогони на себе",
   "lede": "К каждому релизу приложены предсобранные бинарники, каждый архив с <span class=\"mono\">.sha256</span>. Или из исходников: MSRV 1.80, одна зависимость, без unsafe.",
   "bin": "Предсобранные бинарники",
   "fromSource": "Из исходников",
   "releases": "Все версии и контрольные суммы"
  },
  "footer": {
   "line": "Лицензия MIT. moltdisk проверяет, но не удаляет."
  },
  "cmp": {
   "title": "Другие действуют по имени. Здесь действуют по доказательству.",
   "lede": "Разница не в скорости, а в том, что останется у вас после.",
   "th1": "Подход",
   "th2": "По чему решает",
   "th3": "Чем вы платите потом",
   "r1b": "Путь, который вы помните",
   "r1c": "Забытое останется, а перепутанное унесёт исходники",
   "r2n": "Сканер, который ловит имена",
   "r2b": "Только имя",
   "r2c": "Папка с исходниками по имени target тоже попадёт",
   "r3b": "Имя, метка рядом, видимые байты",
   "r3c": "Список с обоснованием; решение остаётся вашим"
  },
  "json": {
   "title": "Отдайте в jq или в CI",
   "lede": "<code>--json</code> пишет тот же вердикт полями: без цвета, без прогресса, готово для конвейера.",
   "note": "Это вся схема. Размеры в байтах, время в секундах Unix.",
   "ci": "<code>--jobs</code> задаёт число потоков замера; <code>--no-color</code> включается сам при перенаправлении вывода.",
   "cmt1": "# только то, что больше 1 GB, по размеру",
   "cmt2": "# CI: падать при превышении порога"
  },
  "faq": {
   "title": "Шесть вопросов, которые вы, вероятно, зададите",
   "lede": "Ответы в коде, а не в формулировках.",
   "q1": "Оно что-нибудь у меня удалит?",
   "a1": "Нет. В 0.1.0 нет модуля delete и нет remove_dir_all. <code>-y</code> — жёсткая ошибка, код выхода 2.",
   "q2": "Почему dist/, build/, bin/ и venv/ не входят по умолчанию?",
   "a2": "Слишком многие шаблоны используют эти имена для исходников. Включите <code>-k all</code> — и судить будете вы.",
   "q3": "Почему не переходить по симлинкам?",
   "a3": "Чтобы ссылка не вывела за указанный корень и те же байты не посчитались дважды.",
   "q4": "Почему числа не совпадают с du?",
   "a4": "moltdisk считает видимые байты файлов, <code>du</code> — блоки на диске.",
   "q5": "Вложенные node_modules считаются дважды?",
   "a5": "Нет. Внешний пропускается, каждый байт считается один раз.",
   "q6": "Есть watch, файл конфигурации, логи?",
   "a6": "Пока нет. 0.1.0 делает один аудит; все три в планах и не выпущены."
  }
 },
 "ar": {
  "meta": {
   "title": "moltdisk · 蜕冗 — ابحث عمّا يُعاد بناؤه، واترك الباقي",
   "desc": "يجول moltdisk في مشاريعك، ويقيس مخرجات البناء التي يمكن إعادة بنائها من المصدر (node_modules وtarget وdist وvenv)، ويرتّبها ويعرض الدليل خلف كل حكم. لا يحذف شيئاً أبداً.",
   "native": "العربية"
  },
  "ui": {
   "skip": "تخطَّ إلى المحتوى",
   "copy": "نسخ",
   "copied": "نُسخ",
   "langLabel": "اللغة",
   "toDark": "داكن",
   "toLight": "فاتح"
  },
  "gauge": {
   "why": "لماذا لا يحذف",
   "verdict": "الحكم",
   "rulebook": "كتاب القواعد",
   "limits": "الحدود",
   "install": "التثبيت",
   "compare": "مقارنة",
   "json": "آلي",
   "faq": "أسئلة"
  },
  "hero": {
   "t1": "ابحث عمّا يُعاد بناؤه،",
   "t2": "واترك الباقي",
   "lede": "يمشي moltdisk عبر مشاريعك، ويقيس مخرجات البناء التي يمكن إعادة بنائها من المصدر——node_modules وtarget وdist وvenv——ويصنّفها ويعرض الدليل خلف كل حكم. ثم يتوقف. هذا الإصدار لا يحتوي على أي مسار للحذف.",
   "cta1": "ثبِّت",
   "cta2": "اقرأ المصدر",
   "cta3": "انظر كيف يُصدر الحكم",
   "caption": "مخرجات حقيقية. هذا السطر الأخير ليس تسويقاً: إنه آخر فعل للبرنامج. التقرير يُسلَّم لمن يقرر."
  },
  "why": {
   "title": "نسخة مبكرة كانت تحذف، لذا أزلنا الحذف",
   "p1": "نسخة داخلية مبكرة كانت تفعل. مع دروع حماية: يُحتسب المجلد فقط عندما يتطابق الاسم وعلامة مجاورة معاً——<span class=\"mono\">target/</span> يحتاج <span class=\"mono\">Cargo.toml</span> بجانبه، و<span class=\"mono\">vendor/</span> يحتاج <span class=\"mono\">composer.json</span>، و<span class=\"mono\">Pods/</span> يحتاج <span class=\"mono\">Podfile</span>. الروابط الرمزية، ومجلد المنزل، وأي شيء خارج الجذور المعطاة، كلها مرفوضة.",
   "p2": "كانت الدروع جيدة، لكنها لم تكفِ. أداة تحذف مجلدات بناء الآخرين وفقاً لقاعدة استدلالية ستحذف الشيء الخطأ يوماً ما، ولن يكون ضاغط الزر هو كاتب القاعدة. لذلك أُزيل الحذف قبل النشر.",
   "p3": "بقي الجزء الذي كان مثيراً للاهتمام منذ البداية: الحكم، معروضاً علناً. إن أردت الحذف، فافعله بنفسك بالقائمة التي يسلّمها لك moltdisk. أنت تعرف مشاريعك؛ moltdisk لا يعرف إلا كتاب قواعده.",
   "noteTitle": "تحقق ذاتي"
  },
  "verdict": {
   "title": "يحتاج الحكم إلى شيئين: اسم، وعلامة",
   "lede": "الاسم ليس دليلاً. <span class=\"mono\">target/</span> كلمة إنجليزية عادية، والمجلد المسمى target المليء بالكود المصدري ليس مخرجات بناء. لذلك تشترط كل قاعدة شيئين: تطابق الاسم، ووجود علامة مجاورة لا يملكها إلا مشروع حقيقي من ذلك النوع. اختر حالة وشاهد كيف يُفحص النصفان.",
   "hint": "يطبع <code>moltdisk why &lt;path&gt;</code> النصفين حرفياً، بما في ذلك العلامات التي كان يبحث عنها حين لم يتطابق شيء.",
   "pathLabel": "المسار",
   "nameLabel": "الاسم المطابق",
   "markerLabel": "العلامات المفحوصة",
   "kindLabel": "النوع",
   "verdictLabel": "الحكم"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "اسم لا لبس فيه——لا حاجة لعلامة"
    ],
    "verdict": "قابل لإعادة البناء",
    "note": "قاعدة بالاسم وحده: node_modules لا يصنعه سوى مدير الحزم."
   },
   {
    "tab": "target، بلا علامة",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——غير موجود",
     "pom.xml / build.gradle——غير موجود"
    ],
    "verdict": "ليس مخرجات بناء",
    "note": "تطابق الاسم، لكن لم تُستوفَ أي علامة. الاسم وحده ليس دليلاً."
   },
   {
    "tab": "target، مع Cargo.toml",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——موجود"
    ],
    "verdict": "قابل لإعادة البناء",
    "note": "سيعيد cargo build توليده بالكامل. سطر إعادة البناء هو الحجة الفعلية."
   }
  ],
  "rulebook": {
   "title": "كتاب القواعد يعيش في <span class=\"mono\">moltdisk kinds</span>",
   "lede": "تحمل كل قاعدة سطر إعادة بناء——الحجة الفعلية لكون المجلد مستغنى عنه——لذا فهو جزء من المخرجات، لا حاشية في التوثيق.",
   "th": {
    "kind": "النوع",
    "names": "الأسماء المطابقة",
    "marker": "العلامة المطلوبة",
    "on": "افتراضياً"
   },
   "on": "مشمول",
   "off": "اختياري",
   "none": "لا شيء——الاسم لا لبس فيه",
   "note": "<span class=\"mono\">dist/</span> و<span class=\"mono\">build/</span> و<span class=\"mono\">bin/</span> و<span class=\"mono\">venv/</span> مستبعدة عمداً من المجموعة الافتراضية: عدد كبير جداً من قوالب المشاريع تستخدم هذه الأسماء للمصدر. الإنذار الكاذب في التقرير رخيص؛ أما في الحذف فليس كذلك——والتقارير تُلصق في أوامر الحذف."
  },
  "limits": {
   "title": "يعرف ما لا يفهمه",
   "i1": "الروابط الرمزية لا تُتبع ولا تُحسب أبداً——لا يستطيع الفحص الخروج من جذر عبر رابط.",
   "i2": "العمق الافتراضي 8. <span class=\"mono\">node_modules</span> المتداخلة داخل <span class=\"mono\">node_modules</span> تُتخطى، فلا تُعدّ الأرقام مرتين.",
   "i3": "الأحجام هي الحجم الظاهر——بايتات الملفات——لا الكتل على القرص. قد يخالف <span class=\"mono\">du</span> الرأي؛ <span class=\"mono\">du</span> يقيس شيئاً آخر.",
   "i4": "المشروع الأحادي الذي يملك lockfile واحداً في الجذر يظل يحصل على حكم لكل workspace، لأن كل <span class=\"mono\">node_modules</span> يُقاس على حدة."
  },
  "install": {
   "title": "ثبِّت واحداً وشغِّله على نفسك",
   "lede": "كل إصدار مرفق به ملفات تنفيذية مبنية مسبقاً، كل أرشيف مع <span class=\"mono\">.sha256</span>. أو من المصدر: MSRV 1.80، تبعية واحدة، دون unsafe.",
   "bin": "ملفات مبنية مسبقاً",
   "fromSource": "من المصدر",
   "releases": "كل الإصدارات والمجاميع"
  },
  "footer": {
   "line": "رخصة MIT. يفحص moltdisk ولا يحذف."
  },
  "cmp": {
   "title": "غيرها يعمل بالاسم. هذا يعمل بالدليل.",
   "lede": "الفرق ليس في السرعة، بل في ما يبقى في يدك بعد ذلك.",
   "th1": "الطريقة",
   "th2": "علامَ يحكم",
   "th3": "ما تتحمله لاحقًا",
   "r1b": "المسار الذي تتذكره",
   "r1c": "ما نسيته يبقى، وما أخطأت في تذكره يأخذ الشيفرة معه",
   "r2n": "ماسح يطابق الأسماء",
   "r2b": "الاسم وحده",
   "r2c": "مجلد شيفرة باسم target يُحسب أيضًا",
   "r3b": "الاسم + علامة مجاورة + بايتات ظاهرة",
   "r3c": "قائمة بأسبابها، والقرار يبقى لك"
  },
  "json": {
   "title": "أوصله إلى jq أو إلى CI",
   "lede": "<code>--json</code> يكتب الحكم نفسه حقولًا: بلا لون وبلا تقدم، صالح للأنابيب.",
   "note": "هذا هو المخطط كله. الأحجام بالبايت والأوقات بثواني يونكس.",
   "ci": "<code>--jobs</code> يضبط خيوط القياس، و<code>--no-color</code> يعمل تلقائيًا عند إعادة توجيه الخرج.",
   "cmt1": "# ما يتجاوز 1 غيغابايت فقط، بحسب الحجم",
   "cmt2": "# CI: إفشال الخط عند تجاوز الحد"
  },
  "faq": {
   "title": "ستة أسئلة ستطرحها على الأرجح",
   "lede": "الأجوبة في الشيفرة، لا في الصياغة.",
   "q1": "هل سيحذف شيئًا من ملفاتي؟",
   "a1": "لا. الإصدار 0.1.0 لا يحوي وحدة delete ولا remove_dir_all. <code>-y</code> خطأ صريح ورمز الخروج 2.",
   "q2": "لماذا لا تدخل dist/ وbuild/ وbin/ وvenv/ في المجموعة الافتراضية؟",
   "a2": "لأن قوالب كثيرة تستخدم هذه الأسماء للشيفرة. أضفها بـ<code>-k all</code> وسيعود الحكم إليك.",
   "q3": "لماذا لا يتبع الروابط الرمزية؟",
   "a3": "كي لا يخرج رابط عن الجذر الذي أعطيته، وكيلا تُحسب البايتات نفسها مرتين.",
   "q4": "لماذا تختلف الأرقام عن du؟",
   "a4": "moltdisk يقيس البايتات الظاهرة في الملفات، و<code>du</code> يقيس كتل القرص.",
   "q5": "هل تُحسب node_modules المتداخلة مرتين؟",
   "a5": "لا. يُتجاوز الخارجي، فتُحسب كل بايت مرة واحدة.",
   "q6": "هل يوجد watch أو ملف إعدادات أو سجلات؟",
   "a6": "ليس بعد. 0.1.0 يجري تدقيقًا واحدًا؛ الثلاثة مخطط لها وغير منشورة."
  }
 },
 "tr": {
  "meta": {
   "title": "moltdisk · 蜕冗 — yeniden kurulabileni bul, gerisini bırak",
   "desc": "moltdisk projelerini tarar, kaynaktan yeniden kurulabilen yapı çıktılarını (node_modules, target, dist, venv) ölçer, sıralar ve her kararın ardındaki kanıtı gösterir. Hiçbir şeyi silmez.",
   "native": "Türkçe"
  },
  "ui": {
   "skip": "İçeriğe atla",
   "copy": "Kopyala",
   "copied": "Kopyalandı",
   "langLabel": "Dil",
   "toDark": "Koyu",
   "toLight": "Açık"
  },
  "gauge": {
   "why": "Neden silmez",
   "verdict": "Karar",
   "rulebook": "Kural kitabı",
   "limits": "Sınırlar",
   "install": "Kurulum",
   "compare": "Karşılaştırma",
   "json": "Makine",
   "faq": "Sorular"
  },
  "hero": {
   "t1": "Yeniden kurulabileni bul,",
   "t2": "gerisini bırak",
   "lede": "moltdisk projelerini tarar, kaynaktan yeniden kurulabilen yapı çıktılarını——node_modules, target, dist, venv——ölçer, sıralar ve her kararın ardındaki kanıtı gösterir. Sonra durur. Bu sürümde silme kodu yoktur.",
   "cta1": "Kur",
   "cta2": "Kaynağı oku",
   "cta3": "Bir kararın nasıl verildiğini gör",
   "caption": "Gerçek çıktı. Son satır pazarlama değil: programın son eylemi. Rapor karar verene gider."
  },
  "why": {
   "title": "Erken bir sürüm silebiliyordu, o yüzden silmeyi çıkardık",
   "p1": "Erken bir iç sürüm silebiliyordu. Korumaları vardı: bir dizin yalnızca ad ve komşu bir işaret eşleştiğinde sayılıyordu——<span class=\"mono\">target/</span> yanında <span class=\"mono\">Cargo.toml</span>, <span class=\"mono\">vendor/</span> <span class=\"mono\">composer.json</span>, <span class=\"mono\">Pods/</span> <span class=\"mono\">Podfile</span> isterdi. Sembolik bağlar, ev dizini ve verilen köklerin dışındaki her şey reddediliyordu.",
   "p2": "Korumalar iyiydi ve yetmedi. Sezgisel kurallarla başkalarının yapı dizinlerini silen bir araç bir gün yanlış şeyi siler ve tuşa basan kişi, kuralı yazan kişi olmaz. Bu yüzden silme, yayımlanmadan önce çıkarıldı.",
   "p3": "Geriye her zaman ilginç olan kısım kaldı: karar, açıkça gösterilen karar. Silmek istiyorsan, moltdisk'in uzattığı listeyle kendin sil. Sen projelerini bilirsin; moltdisk yalnızca kural kitabını bilir.",
   "noteTitle": "Kendi kendini doğrulama"
  },
  "verdict": {
   "title": "Bir karar için iki şey gerekir: bir ad ve bir işaret",
   "lede": "Bir ad kanıt değildir. <span class=\"mono\">target/</span> sıradan bir İngilizce kelimedir ve target adlı, kaynak dosyalarla dolu bir klasör yapı çıktısı değildir. Bu yüzden her kural iki şey ister: ad eşleşir ve yalnızca gerçek bir projenin sahip olacağı bir komşu işaret vardır. Bir durum seç ve iki yarının nasıl denetlendiğini izle.",
   "hint": "<code>moltdisk why &lt;path&gt;</code> iki yarıyı da aynen yazdırır; hiçbir şey eşleşmediğinde aradığı işaretler dahil.",
   "pathLabel": "yol",
   "nameLabel": "eşleşen ad",
   "markerLabel": "denetlenen işaretler",
   "kindLabel": "tür",
   "verdictLabel": "karar"
  },
  "cases": [
   {
    "tab": "node_modules",
    "path": "~/code/web-shop/node_modules",
    "kind": "node",
    "name": "node_modules",
    "marker": [
     "ad net——işaret gerekmez"
    ],
    "verdict": "Yeniden kurulabilir",
    "note": "Yalnız ad kuralı: node_modules'ı yalnızca bir paket yöneticisi üretir."
   },
   {
    "tab": "target, işaretsiz",
    "path": "~/code/web-shop/target",
    "kind": "rust · jvm",
    "name": "target",
    "marker": [
     "Cargo.toml——bulunamadı",
     "pom.xml / build.gradle——bulunamadı"
    ],
    "verdict": "Yapı çıktısı değil",
    "note": "Ad eşleşti ama hiçbir işaret karşılanmadı. Ad tek başına kanıt değildir."
   },
   {
    "tab": "target, Cargo.toml ile",
    "path": "~/code/svc-api/target",
    "kind": "rust",
    "name": "target",
    "marker": [
     "Cargo.toml——bulundu"
    ],
    "verdict": "Yeniden kurulabilir",
    "note": "cargo build hepsini yeniden üretir. Yeniden kurma satırı asıl argümandır."
   }
  ],
  "rulebook": {
   "title": "Kural kitabı <span class=\"mono\">moltdisk kinds</span> içinde yaşar",
   "lede": "Her kural bir yeniden kurma satırı taşır——bir dizinin neden vazgeçilebilir olduğunun asıl argümanı——bu yüzden çıktının parçasıdır, dokümantasyonun dipnotu değil.",
   "th": {
    "kind": "Tür",
    "names": "Eşleşen adlar",
    "marker": "Gerekli işaret",
    "on": "Varsayılan"
   },
   "on": "dahil",
   "off": "isteğe bağlı",
   "none": "yok——ad net",
   "note": "<span class=\"mono\">dist/</span>, <span class=\"mono\">build/</span>, <span class=\"mono\">bin/</span> ve <span class=\"mono\">venv/</span> bilinçli olarak varsayılan kümede değil: çok fazla proje şablonu bu adları kaynak için kullanıyor. Rapordaki yanlış pozitif ucuzdur; silmedeki yanlış pozitif değildir——ve raporlar silme komutlarına kopyalanır."
  },
  "limits": {
   "title": "Neyi anlamadığını bilir",
   "i1": "Sembolik bağlar asla izlenmez ve sayılmaz——tarama bir bağ üzerinden kökün dışına çıkamaz.",
   "i2": "Varsayılan derinlik 8'dir. Bir <span class=\"mono\">node_modules</span> içine gömülü <span class=\"mono\">node_modules</span> atlanır, sayılar iki kez sayılmaz.",
   "i3": "Boyutlar görünür boyuttur——dosyalardaki baytlar——diskteki bloklar değil. <span class=\"mono\">du</span> aynı fikirde olmayabilir; <span class=\"mono\">du</span> başka bir şeyi ölçüyor.",
   "i4": "Kökünde tek lockfile olan bir monorepo yine de her workspace için ayrı karar alır, çünkü her <span class=\"mono\">node_modules</span> ayrı ölçülür."
  },
  "install": {
   "title": "Bir tane kur, sonra kendinde çalıştır",
   "lede": "Her sürümde önceden derlenmiş ikili dosyalar var, her arşiv <span class=\"mono\">.sha256</span> ile birlikte. Veya kaynaktan: MSRV 1.80, tek bağımlılık, unsafe yok.",
   "bin": "Önceden derlenmiş ikililer",
   "fromSource": "Kaynaktan",
   "releases": "Tüm sürümler ve sağlama toplamları"
  },
  "footer": {
   "line": "MIT lisansı. moltdisk denetler; silmez."
  },
  "cmp": {
   "title": "Başkaları ada göre davranır. Bu, kanıta göre.",
   "lede": "Fark hızda değil, sonrasında elinde ne kaldığında.",
   "th1": "Yaklaşım",
   "th2": "Neye göre karar verir",
   "th3": "Sonra neyi taşırsın",
   "r1b": "Hatırladığın yol",
   "r1c": "Unuttuğun kalır, yanlış hatırladığın kaynağı da götürür",
   "r2n": "Adları eşleyen tarayıcı",
   "r2b": "Yalnızca ad",
   "r2c": "target adlı bir kaynak klasörü de sayılır",
   "r3b": "Ad + komşu işaret + görünen bayt",
   "r3c": "Gerekçeli bir liste; karar sende kalır"
  },
  "json": {
   "title": "jq'ya ya da CI'a bağla",
   "lede": "<code>--json</code> aynı hükmü alan olarak yazar: renk yok, ilerleme yok, boru hattına hazır.",
   "note": "Şema bundan ibaret. Boyutlar bayt, zamanlar Unix saniyesi.",
   "ci": "<code>--jobs</code> ölçüm iş parçacıklarını belirler; <code>--no-color</code> çıktı yönlendirilince kendiliğinden devreye girer.",
   "cmt1": "# yalnızca 1 GB üstü, boyuta göre",
   "cmt2": "# CI: eşik aşılırsa iş akışını düşür"
  },
  "faq": {
   "title": "Muhtemelen soracağın altı şey",
   "lede": "Yanıtlar kodda, ifadede değil.",
   "q1": "Bir şeyimi siler mi?",
   "a1": "Hayır. 0.1.0'da delete modülü de remove_dir_all da yok. <code>-y</code> sert hatadır, çıkış kodu 2.",
   "q2": "dist/, build/, bin/ ve venv/ neden varsayılan kümede değil?",
   "a2": "Çok fazla şablon bu adları kaynak için kullanıyor. <code>-k all</code> ile ekle, o zaman hüküm senin olur.",
   "q3": "Neden sembolik bağlantıları izlemez?",
   "a3": "Bir bağlantı verdiğin kökün dışına çıkmasın ve aynı baytlar iki kez sayılmasın diye.",
   "q4": "Neden du ile tutmuyor?",
   "a4": "moltdisk dosyaların görünen baytlarını, <code>du</code> diskteki blokları ölçer.",
   "q5": "İç içe node_modules iki kez sayılır mı?",
   "a5": "Hayır. Dıştaki atlanır, her bayt bir kez sayılır.",
   "q6": "watch, yapılandırma dosyası, günlük var mı?",
   "a6": "Henüz yok. 0.1.0 tek seferlik denetim yapar; üçü de planda, hiçbiri yayımlanmadı."
  }
 }
};
