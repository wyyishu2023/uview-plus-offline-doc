(function () {
  const isProd = true; //本地看和部署线上
  const BaseUrl = isProd ? "" : "file:///C:/Users/chatg/Desktop"; // 自己修改目录地址
  const menuList = [
    {
      title: "FloatButton 悬浮按钮组件",
      key: "FloatButton",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/floatButton/floatButton",
      url: "/uview-plus/FloatButton.html",
    },
    {
      title: "CateTab 垂直TAB",
      key: "CateTab",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/cateTab/cateTab",
      url: "/uview-plus/CateTab.html",
    },
    {
      title: "Color 色彩",
      key: "Color",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/color/color",
      url: "/uview-plus/Color.html",
    },
    {
      title: "Image 图片",
      key: "Image",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/image/image",
      url: "/uview-plus/Image.html",
    },
    {
      title: "Icon 图标",
      key: "Icon",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/icon/icon",
      url: "/uview-plus/Icon.html",
    },
    {
      title: "Button 按钮",
      key: "Button",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/button/button",
      url: "/uview-plus/Button.html",
    },
    {
      title: "Text 文本",
      key: "Text",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/text/text",
      url: "/uview-plus/Text.html",
    },
    {
      title: "Layout 布局",
      key: "Layout",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/layout/layout",
      url: "/uview-plus/Layout.html",
    },
    {
      title: "Cell 单元格",
      key: "Cell",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/cell/cell",
      url: "/uview-plus/Cell.html",
    },
    {
      title: "Badge 徽标数",
      key: "Badge",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/badge/badge",
      url: "/uview-plus/Badge.html",
    },
    {
      title: "Tag 标签",
      key: "Tag",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/tag/tag",
      url: "/uview-plus/Tag.html",
    },
    {
      title: "LoadingIcon 加载动画",
      key: "LoadingIcon",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/loading-icon/loading-icon",
      url: "/uview-plus/LoadingIcon.html",
    },
    {
      title: "LoadingPage 加载页",
      key: "LoadingPage",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/loading-page/loading-page",
      url: "/uview-plus/LoadingPage.html",
    },
    {
      title: "Form 表单",
      key: "Form",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/form/form",
      url: "/uview-plus/Form.html",
    },
    {
      title: "Calendar 日历",
      key: "Calendar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/calendar/calendar",
      url: "/uview-plus/Calendar.html",
    },
    {
      title: "Keyboard 键盘",
      key: "Keyboard",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/keyboard/keyboard",
      url: "/uview-plus/Keyboard.html",
    },
    {
      title: "Picker 选择器",
      key: "Picker",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/picker/picker",
      url: "/uview-plus/Picker.html",
    },
    {
      title: "DatetimePicker 选择器",
      key: "DatetimePicker",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/datetimepicker/datetimepicker",
      url: "/uview-plus/DatetimePicker.html",
    },
    {
      title: "Rate 评分",
      key: "Rate",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/rate/rate",
      url: "/uview-plus/Rate.html",
    },
    {
      title: "Search 搜索",
      key: "Search",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/search/search",
      url: "/uview-plus/Search.html",
    },
    {
      title: "NumberBox 步进器",
      key: "NumberBox",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/numberbox/numberbox",
      url: "/uview-plus/NumberBox.html",
    },
    {
      title: "Upload 上传",
      key: "Upload",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/upload/upload",
      url: "/uview-plus/Upload.html",
    },
    {
      title: "Code 验证码输入框",
      key: "Code",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/code/code",
      url: "/uview-plus/Code.html",
    },
    {
      title: "Input 输入框",
      key: "Input",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/input/input",
      url: "/uview-plus/Input.html",
    },
    {
      title: "Textarea 文本域",
      key: "Textarea",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/textarea/textarea",
      url: "/uview-plus/Textarea.html",
    },
    {
      title: "Checkbox 复选框",
      key: "Checkbox",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/checkbox/checkbox",
      url: "/uview-plus/Checkbox.html",
    },
    {
      title: "Radio 单选框",
      key: "Radio",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/radio/radio",
      url: "/uview-plus/Radio.html",
    },
    {
      title: "Switch 开关选择器",
      key: "Switch",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/switch/switch",
      url: "/uview-plus/Switch.html",
    },
    {
      title: "Slider 滑动选择器",
      key: "Slider",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/slider/slider",
      url: "/uview-plus/Slider.html",
    },
    {
      title: "Album 相册",
      key: "Album",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/album/album",
      url: "/uview-plus/Album.html",
    },
    {
      title: "List 列表",
      key: "List",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/list/list",
      url: "/uview-plus/List.html",
    },
    {
      title: "LineProgress 线形进度条",
      key: "LineProgress",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/progress/progress",
      url: "/uview-plus/LineProgress.html",
    },
    {
      title: "CountDown 倒计时",
      key: "CountDown",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/countDown/countDown",
      url: "/uview-plus/CountDown.html",
    },
    {
      title: "CountTo 数字滚动",
      key: "CountTo",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/countTo/countTo",
      url: "/uview-plus/CountTo.html",
    },
    {
      title: "Tooltip 长按提示",
      key: "Tooltip",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/tooltip/tooltip",
      url: "/uview-plus/Tooltip.html",
    },
    {
      title: "ActionSheet 操作菜单",
      key: "ActionSheet",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/actionsheet/actionsheet",
      url: "/uview-plus/ActionSheet.html",
    },
    {
      title: "Alert 警告提示",
      key: "Alert",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/alert/alert",
      url: "/uview-plus/Alert.html",
    },
    {
      title: "Toast 消息提示",
      key: "Toast",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/toast/toast",
      url: "/uview-plus/Toast.html",
    },
    {
      title: "NoticeBar 滚动通知",
      key: "NoticeBar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/noticebar/noticebar",
      url: "/uview-plus/NoticeBar.html",
    },
    {
      title: "Notify 消息提示",
      key: "Notify",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/notify/notify",
      url: "/uview-plus/Notify.html",
    },
    {
      title: "SwipeAction 滑动单元格",
      key: "SwipeAction",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/swipeaction/swipeaction",
      url: "/uview-plus/SwipeAction.html",
    },
    {
      title: "Collapse 折叠面板",
      key: "Collapse",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/collapse/collapse",
      url: "/uview-plus/Collapse.html",
    },
    {
      title: "Popup 弹出层",
      key: "Popup",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/popup/popup",
      url: "/uview-plus/Popup.html",
    },
    {
      title: "Modal 模态框",
      key: "Modal",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/modal/modal",
      url: "/uview-plus/Modal.html",
    },
    {
      title: "Copy 复制",
      key: "Copy",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/copy/copy",
      url: "/uview-plus/Copy.html",
    },
    {
      title: "ScrollList 横向滚动列表",
      key: "ScrollList",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/scrolllist/scrolllist",
      url: "/uview-plus/ScrollList.html",
    },
    {
      title: "Line 线条",
      key: "Line",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/line/line",
      url: "/uview-plus/Line.html",
    },
    {
      title: "Card 卡片",
      key: "Card",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/card/card",
      url: "/uview-plus/Card.html",
    },
    {
      title: "Overlay 遮罩层",
      key: "Overlay",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/overlay/overlay",
      url: "/uview-plus/Overlay.html",
    },
    {
      title: "NoNetwork 无网络提示",
      key: "NoNetwork",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/nonetwork/nonetwork",
      url: "/uview-plus/NoNetwork.html",
    },
    {
      title: "Grid 宫格布局",
      key: "Grid",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/grid/grid",
      url: "/uview-plus/Grid.html",
    },
    {
      title: "Swiper 轮播图",
      key: "Swiper",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/swiper/swiper",
      url: "/uview-plus/Swiper.html",
    },
    {
      title: "Skeleton 骨架屏",
      key: "Skeleton",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/skeleton/skeleton",
      url: "/uview-plus/Skeleton.html",
    },
    {
      title: "Sticky 吸顶",
      key: "Sticky",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/sticky/sticky",
      url: "/uview-plus/Sticky.html",
    },
    {
      title: "Waterfall 瀑布流",
      key: "Waterfall",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/waterfall/waterfall",
      url: "/uview-plus/Waterfall.html",
    },
    {
      title: "Box 盒子",
      key: "Box",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/box/box",
      url: "/uview-plus/Box.html",
    },
    {
      title: "Divider 分割线",
      key: "Divider",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/divider/divider",
      url: "/uview-plus/Divider.html",
    },
    {
      title: "Dropdown 下拉菜单",
      key: "Dropdown",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/dropdown/dropdown",
      url: "/uview-plus/Dropdown.html",
    },
    {
      title: "Tabbar 底部导航栏",
      key: "Tabbar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/tabbar/tabbar",
      url: "/uview-plus/Tabbar.html",
    },
    {
      title: "BackTop 返回顶部",
      key: "BackTop",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/backtop/backtop",
      url: "/uview-plus/BackTop.html",
    },
    {
      title: "Navbar 自定义导航栏",
      key: "Navbar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/navbar/navbar",
      url: "/uview-plus/Navbar.html",
    },
    {
      title: "NavbarMini 迷你导航栏",
      key: "NavbarMini",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/navbarmini/navbarmini",
      url: "/uview-plus/NavbarMini.html",
    },
    {
      title: "Tabs 标签",
      key: "Tabs",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/tabs/tabs",
      url: "/uview-plus/Tabs.html",
    },
    {
      title: "Subsection 分段器",
      key: "Subsection",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/subsection/subsection",
      url: "/uview-plus/Subsection.html",
    },
    {
      title: "IndexList 索引列表",
      key: "IndexList",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/indexlist/indexlist",
      url: "/uview-plus/IndexList.html",
    },
    {
      title: "Steps 步骤条",
      key: "Steps",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/steps/steps",
      url: "/uview-plus/Steps.html",
    },
    {
      title: "Empty 内容为空",
      key: "Empty",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/empty/empty",
      url: "/uview-plus/Empty.html",
    },
    {
      title: "Parse 富文本解析器",
      key: "Parse",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/parse/parse",
      url: "/uview-plus/Parse.html",
    },
    {
      title: "CodeInput 验证码输入",
      key: "CodeInput",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/codeinput/codeinput",
      url: "/uview-plus/CodeInput.html",
    },
    {
      title: "LoadMore 加载更多",
      key: "LoadMore",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/loadmore/loadmore",
      url: "/uview-plus/LoadMore.html",
    },
    {
      title: "ReadMore 展开阅读更多",
      key: "ReadMore",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/readmore/readmore",
      url: "/uview-plus/ReadMore.html",
    },
    {
      title: "LazyLoad 图片懒加载",
      key: "LazyLoad",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/lazyload/lazyload",
      url: "/uview-plus/LazyLoad.html",
    },
    {
      title: "Gap 间隔槽",
      key: "Gap",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/gap/gap",
      url: "/uview-plus/Gap.html",
    },
    {
      title: "Avatar 头像",
      key: "Avatar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/avatar/avatar",
      url: "/uview-plus/Avatar.html",
    },
    {
      title: "Link 超链接",
      key: "Link",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/link/link",
      url: "/uview-plus/Link.html",
    },
    {
      title: "Transition 动画",
      key: "Transition",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/transition/transition",
      url: "/uview-plus/Transition.html",
    },
    {
      title: "Qrcode 二维码",
      key: "Qrcode",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/qrcode/qrcode",
      url: "/uview-plus/Qrcode.html",
    },
  ];

  // 获取菜单容器和其他元素
  const menuDom = document.getElementById("menu");
  const iframeDom = document.getElementById("iframeId");
  const logoDom = document.querySelector(".left-menu h3");

  // 创建搜索框容器
  const searchContainer = document.createElement("div");
  searchContainer.style.position = "fixed";
  searchContainer.style.top = "20px";
  searchContainer.style.right = "20px";
  searchContainer.style.zIndex = "1000";
  searchContainer.style.width = "300px";
  document.body.appendChild(searchContainer);

  // 创建搜索框
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "搜索菜单...";
  searchInput.style.width = "100%";
  searchInput.style.padding = "10px 40px 10px 15px";
  searchInput.style.border = "1px solid #ccc";
  searchInput.style.borderRadius = "25px";
  searchInput.style.fontSize = "14px";
  searchInput.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  searchInput.style.outline = "none";
  searchContainer.appendChild(searchInput);

  // 创建下拉列表
  const dropdown = document.createElement("ul");
  dropdown.style.display = "none";
  dropdown.style.position = "absolute";
  dropdown.style.top = "50px";
  dropdown.style.width = "100%";
  dropdown.style.maxHeight = "200px";
  dropdown.style.overflowY = "auto";
  dropdown.style.backgroundColor = "#fff";
  dropdown.style.border = "1px solid #ccc";
  dropdown.style.borderRadius = "10px";
  dropdown.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  dropdown.style.listStyle = "none";
  dropdown.style.padding = "0";
  dropdown.style.margin = "0";
  searchContainer.appendChild(dropdown);

  // 状态变量
  let currentFocusIndex = -1;
  let matchedItems = [];

  // 添加点击事件
  logoDom.addEventListener("click", (e) => {
    window.location.href = "./index.html";
  });

  // 获取当前页面的 URL
  const URL = window.location.href.split("/");
  const nowUrl = URL[URL.length - 1].split(".")[0];

  // 渲染菜单
  function renderMenu() {
    menuList.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${BaseUrl + item.url}" title="${item.title}">${
        item.title
      }</a>`;

      if (nowUrl === item.key) {
        li.className = "active";
        iframeDom.src = item.iframe;
        document.title = item.title;

        setTimeout(() => {
          li.scrollIntoView({ block: "center" });
        }, 0);
      }

      menuDom.appendChild(li);
    });
  }

  // 初始渲染菜单
  renderMenu();

  // 高亮当前选项
  function setActiveItem(index) {
    const items = dropdown.getElementsByTagName("li");
    Array.from(items).forEach((item, i) => {
      item.classList.toggle("active", i === index);
      if (i === index) item.scrollIntoView({ block: "nearest" });
    });
  }

  // 执行跳转
  function navigateToItem(index) {
    if (matchedItems[index]) {
      window.location.href = BaseUrl + matchedItems[index].url;
    }
  }

  // 监听键盘事件
  searchInput.addEventListener("keydown", (e) => {
    const items = dropdown.getElementsByTagName("li");

    // 下箭头
    if (e.key === "ArrowDown") {
      currentFocusIndex = (currentFocusIndex + 1) % items.length;
      setActiveItem(currentFocusIndex);
      e.preventDefault();
    }
    // 上箭头
    else if (e.key === "ArrowUp") {
      currentFocusIndex = (currentFocusIndex - 1 + items.length) % items.length;
      setActiveItem(currentFocusIndex);
      e.preventDefault();
    }
    // 回车
    else if (e.key === "Enter") {
      if (items.length === 1) {
        navigateToItem(0);
      } else if (currentFocusIndex > -1) {
        navigateToItem(currentFocusIndex);
      }
      e.preventDefault();
    }
    // ESC
    else if (e.key === "Escape") {
      dropdown.style.display = "none";
      currentFocusIndex = -1;
    }
  });

  // 监听搜索框输入事件
  searchInput.addEventListener("input", (e) => {
    const filterText = e.target.value.trim().toLowerCase();
    dropdown.innerHTML = "";
    currentFocusIndex = -1;

    if (filterText) {
      matchedItems = menuList.filter((item) =>
        item.title.toLowerCase().includes(filterText)
      );

      matchedItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        li.style.padding = "10px 15px";
        li.style.cursor = "pointer";
        li.style.fontSize = "14px";
        li.style.color = "#333";
        li.style.borderBottom = "1px solid #eee";
        li.style.transition = "background 0.2s";

        // 鼠标交互
        li.addEventListener("mouseover", () => {
          currentFocusIndex = index;
          setActiveItem(index);
        });
        li.addEventListener("click", () => {
          navigateToItem(index);
        });

        dropdown.appendChild(li);
      });

      // 自动聚焦首个选项
      if (matchedItems.length === 1) {
        currentFocusIndex = 0;
        setActiveItem(0);
      }

      dropdown.style.display = matchedItems.length ? "block" : "none";
    } else {
      dropdown.style.display = "none";
    }
  });

  // 点击页面其他区域时隐藏下拉列表
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // 添加CSS样式
  const style = document.createElement("style");
  style.textContent = `
  .active {
    background: #f0f5ff !important;
    color: #1677ff !important;
  }
`;
  document.head.appendChild(style);

  // 自动为所有代码块添加复制按钮
  document.querySelectorAll("pre").forEach((pre) => {
    // 创建复制按钮
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "复制";

    // 绑定点击事件
    button.addEventListener("click", () => {
      const code = pre.querySelector("code").innerText;
      if (navigator.clipboard) {
        // 使用 Clipboard API
        navigator.clipboard
          .writeText(code)
          .then(() => {
            button.textContent = "已复制";
            button.classList.add("copied"); // 添加绿色背景
            setTimeout(() => {
              button.textContent = "复制";
              button.classList.remove("copied"); // 恢复默认样式
            }, 2000); // 2秒后恢复
          })
          .catch((err) => {
            console.error("复制失败:", err);
          });
      } else {
        // 回退到 document.execCommand
        const textarea = document.createElement("textarea");
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          button.textContent = "已复制";
          button.classList.add("copied"); // 添加绿色背景
          setTimeout(() => {
            button.textContent = "复制";
            button.classList.remove("copied"); // 恢复默认样式
          }, 2000);
        } catch (err) {
          console.error("复制失败:", err);
        }
        document.body.removeChild(textarea);
      }
    });

    // 将按钮添加到代码块中
    pre.appendChild(button);
  });
})();
