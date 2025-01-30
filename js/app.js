(function () {
  const isProd = false; //本地看和部署线上
  const BaseUrl = isProd ? "" : "file:///C:/Users/chatg/Desktop"; // 自己修改目录地址
  const prodUrl = isProd ? "/uview-plus-offline-doc" : "/uview-plus";
  const menuList = [
    {
      title: "FloatButton 悬浮按钮组件",
      key: "FloatButton",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/floatButton/floatButton",
      url: prodUrl + "/FloatButton.html",
    },
    {
      title: "CateTab 垂直TAB",
      key: "CateTab",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/cateTab/cateTab",
      url: prodUrl + "/CateTab.html",
    },
    {
      title: "Color 色彩",
      key: "Color",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/color/color",
      url: prodUrl + "/Color.html",
    },
    {
      title: "Image 图片",
      key: "Image",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/image/image",
      url: prodUrl + "/Image.html",
    },
    {
      title: "Icon 图标",
      key: "Icon",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/icon/icon",
      url: prodUrl + "/Icon.html",
    },
    {
      title: "Button 按钮",
      key: "Button",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/button/button",
      url: prodUrl + "/Button.html",
    },
    {
      title: "Text 文本",
      key: "Text",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/text/text",
      url: prodUrl + "/Text.html",
    },
    {
      title: "Layout 布局",
      key: "Layout",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/layout/layout",
      url: prodUrl + "/Layout.html",
    },
    {
      title: "Cell 单元格",
      key: "Cell",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/cell/cell",
      url: prodUrl + "/Cell.html",
    },
    {
      title: "Badge 徽标数",
      key: "Badge",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/badge/badge",
      url: prodUrl + "/Badge.html",
    },
    {
      title: "Tag 标签",
      key: "Tag",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/tag/tag",
      url: prodUrl + "/Tag.html",
    },
    {
      title: "LoadingIcon 加载动画",
      key: "LoadingIcon",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/loading-icon/loading-icon",
      url: prodUrl + "/LoadingIcon.html",
    },
    {
      title: "LoadingPage 加载页",
      key: "LoadingPage",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/loading-page/loading-page",
      url: prodUrl + "/LoadingPage.html",
    },
    {
      title: "Form 表单",
      key: "Form",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/form/form",
      url: prodUrl + "/Form.html",
    },
    {
      title: "Calendar 日历",
      key: "Calendar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/calendar/calendar",
      url: prodUrl + "/Calendar.html",
    },
    {
      title: "Keyboard 键盘",
      key: "Keyboard",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/keyboard/keyboard",
      url: prodUrl + "/Keyboard.html",
    },
    {
      title: "Picker 选择器",
      key: "Picker",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/picker/picker",
      url: prodUrl + "/Picker.html",
    },
    {
      title: "DatetimePicker 选择器",
      key: "DatetimePicker",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/datetimepicker/datetimepicker",
      url: prodUrl + "/DatetimePicker.html",
    },
    {
      title: "Rate 评分",
      key: "Rate",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/rate/rate",
      url: prodUrl + "/Rate.html",
    },
    {
      title: "Search 搜索",
      key: "Search",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/search/search",
      url: prodUrl + "/Search.html",
    },
    {
      title: "NumberBox 步进器",
      key: "NumberBox",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/numberbox/numberbox",
      url: prodUrl + "/NumberBox.html",
    },
    {
      title: "Upload 上传",
      key: "Upload",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/upload/upload",
      url: prodUrl + "/Upload.html",
    },
    {
      title: "Code 验证码输入框",
      key: "Code",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/code/code",
      url: prodUrl + "/Code.html",
    },
    {
      title: "Input 输入框",
      key: "Input",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/input/input",
      url: prodUrl + "/Input.html",
    },
    {
      title: "Textarea 文本域",
      key: "Textarea",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/textarea/textarea",
      url: prodUrl + "/Textarea.html",
    },
    {
      title: "Checkbox 复选框",
      key: "Checkbox",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/checkbox/checkbox",
      url: prodUrl + "/Checkbox.html",
    },
    {
      title: "Radio 单选框",
      key: "Radio",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/radio/radio",
      url: prodUrl + "/Radio.html",
    },
    {
      title: "Switch 开关选择器",
      key: "Switch",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/switch/switch",
      url: prodUrl + "/Switch.html",
    },
    {
      title: "Slider 滑动选择器",
      key: "Slider",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/slider/slider",
      url: prodUrl + "/Slider.html",
    },
    {
      title: "Album 相册",
      key: "Album",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/album/album",
      url: prodUrl + "/Album.html",
    },
    {
      title: "List 列表",
      key: "List",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/list/list",
      url: prodUrl + "/List.html",
    },
    {
      title: "LineProgress 线形进度条",
      key: "LineProgress",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/progress/progress",
      url: prodUrl + "/LineProgress.html",
    },
    {
      title: "CountDown 倒计时",
      key: "CountDown",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/countDown/countDown",
      url: prodUrl + "/CountDown.html",
    },
    {
      title: "CountTo 数字滚动",
      key: "CountTo",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/countTo/countTo",
      url: prodUrl + "/CountTo.html",
    },
    {
      title: "Tooltip 长按提示",
      key: "Tooltip",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/tooltip/tooltip",
      url: prodUrl + "/Tooltip.html",
    },
    {
      title: "ActionSheet 操作菜单",
      key: "ActionSheet",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/actionsheet/actionsheet",
      url: prodUrl + "/ActionSheet.html",
    },
    {
      title: "Alert 警告提示",
      key: "Alert",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/alert/alert",
      url: prodUrl + "/Alert.html",
    },
    {
      title: "Toast 消息提示",
      key: "Toast",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/toast/toast",
      url: prodUrl + "/Toast.html",
    },
    {
      title: "NoticeBar 滚动通知",
      key: "NoticeBar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/noticebar/noticebar",
      url: prodUrl + "/NoticeBar.html",
    },
    {
      title: "Notify 消息提示",
      key: "Notify",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/notify/notify",
      url: prodUrl + "/Notify.html",
    },
    {
      title: "SwipeAction 滑动单元格",
      key: "SwipeAction",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/swipeaction/swipeaction",
      url: prodUrl + "/SwipeAction.html",
    },
    {
      title: "Collapse 折叠面板",
      key: "Collapse",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/collapse/collapse",
      url: prodUrl + "/Collapse.html",
    },
    {
      title: "Popup 弹出层",
      key: "Popup",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/popup/popup",
      url: prodUrl + "/Popup.html",
    },
    {
      title: "Modal 模态框",
      key: "Modal",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/modal/modal",
      url: prodUrl + "/Modal.html",
    },
    {
      title: "Copy 复制",
      key: "Copy",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/copy/copy",
      url: prodUrl + "/Copy.html",
    },
    {
      title: "ScrollList 横向滚动列表",
      key: "ScrollList",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/scrolllist/scrolllist",
      url: prodUrl + "/ScrollList.html",
    },
    {
      title: "Line 线条",
      key: "Line",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/line/line",
      url: prodUrl + "/Line.html",
    },
    {
      title: "Card 卡片",
      key: "Card",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/card/card",
      url: prodUrl + "/Card.html",
    },
    {
      title: "Overlay 遮罩层",
      key: "Overlay",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/overlay/overlay",
      url: prodUrl + "/Overlay.html",
    },
    {
      title: "NoNetwork 无网络提示",
      key: "NoNetwork",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/nonetwork/nonetwork",
      url: prodUrl + "/NoNetwork.html",
    },
    {
      title: "Grid 宫格布局",
      key: "Grid",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/grid/grid",
      url: prodUrl + "/Grid.html",
    },
    {
      title: "Swiper 轮播图",
      key: "Swiper",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/swiper/swiper",
      url: prodUrl + "/Swiper.html",
    },
    {
      title: "Skeleton 骨架屏",
      key: "Skeleton",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/skeleton/skeleton",
      url: prodUrl + "/Skeleton.html",
    },
    {
      title: "Sticky 吸顶",
      key: "Sticky",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/sticky/sticky",
      url: prodUrl + "/Sticky.html",
    },
    {
      title: "Waterfall 瀑布流",
      key: "Waterfall",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/waterfall/waterfall",
      url: prodUrl + "/Waterfall.html",
    },
    {
      title: "Box 盒子",
      key: "Box",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/box/box",
      url: prodUrl + "/Box.html",
    },
    {
      title: "Divider 分割线",
      key: "Divider",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/divider/divider",
      url: prodUrl + "/Divider.html",
    },
    {
      title: "Dropdown 下拉菜单",
      key: "Dropdown",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/dropdown/dropdown",
      url: prodUrl + "/Dropdown.html",
    },
    {
      title: "Tabbar 底部导航栏",
      key: "Tabbar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/tabbar/tabbar",
      url: prodUrl + "/Tabbar.html",
    },
    {
      title: "BackTop 返回顶部",
      key: "BackTop",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/backtop/backtop",
      url: prodUrl + "/BackTop.html",
    },
    {
      title: "Navbar 自定义导航栏",
      key: "Navbar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/navbar/navbar",
      url: prodUrl + "/Navbar.html",
    },
    {
      title: "NavbarMini 迷你导航栏",
      key: "NavbarMini",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/navbarmini/navbarmini",
      url: prodUrl + "/NavbarMini.html",
    },
    {
      title: "Tabs 标签",
      key: "Tabs",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/tabs/tabs",
      url: prodUrl + "/Tabs.html",
    },
    {
      title: "Subsection 分段器",
      key: "Subsection",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/subsection/subsection",
      url: prodUrl + "/Subsection.html",
    },
    {
      title: "IndexList 索引列表",
      key: "IndexList",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/indexlist/indexlist",
      url: prodUrl + "/IndexList.html",
    },
    {
      title: "Steps 步骤条",
      key: "Steps",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/steps/steps",
      url: prodUrl + "/Steps.html",
    },
    {
      title: "Empty 内容为空",
      key: "Empty",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/empty/empty",
      url: prodUrl + "/Empty.html",
    },
    {
      title: "Parse 富文本解析器",
      key: "Parse",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsB/parse/parse",
      url: prodUrl + "/Parse.html",
    },
    {
      title: "CodeInput 验证码输入",
      key: "CodeInput",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/codeinput/codeinput",
      url: prodUrl + "/CodeInput.html",
    },
    {
      title: "LoadMore 加载更多",
      key: "LoadMore",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/loadmore/loadmore",
      url: prodUrl + "/LoadMore.html",
    },
    {
      title: "ReadMore 展开阅读更多",
      key: "ReadMore",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/readmore/readmore",
      url: prodUrl + "/ReadMore.html",
    },
    {
      title: "LazyLoad 图片懒加载",
      key: "LazyLoad",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/lazyload/lazyload",
      url: prodUrl + "/LazyLoad.html",
    },
    {
      title: "Gap 间隔槽",
      key: "Gap",
      iframe: "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/gap/gap",
      url: prodUrl + "/Gap.html",
    },
    {
      title: "Avatar 头像",
      key: "Avatar",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsC/avatar/avatar",
      url: prodUrl + "/Avatar.html",
    },
    {
      title: "Link 超链接",
      key: "Link",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/link/link",
      url: prodUrl + "/Link.html",
    },
    {
      title: "Transition 动画",
      key: "Transition",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsA/transition/transition",
      url: prodUrl + "/Transition.html",
    },
    {
      title: "Qrcode 二维码",
      key: "Qrcode",
      iframe:
        "https://uview-plus.jiangruyi.com/h5/#/pages/componentsD/qrcode/qrcode",
      url: prodUrl + "/Qrcode.html",
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

  // 配置项
  const counterConfig = [
    { type: "site_uv", label: "访客数" },
    { type: "site_pv", label: "总访问量" },
    { type: "page_pv", label: "阅读量" },
  ];

  // 创建单行统计容器
  function createCompactCounter() {
    const container = document.createElement("div");
    container.id = "busuanzi-compact-container";

    // 定位样式
    Object.assign(container.style, {
      position: "fixed",
      bottom: "10px",
      right: "10px",
      zIndex: "9999",
      background: "rgba(255, 255, 255, 0.9)",
      padding: "6px 12px",
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      display: "none", // 默认隐藏
      alignItems: "center",
      gap: "12px",
      fontSize: "12px",
      whiteSpace: "nowrap",
    });

    // 动态添加统计项
    counterConfig.forEach((config) => {
      const item = document.createElement("span");
      item.className = "busuanzi-compact-item";
      item.innerHTML = `
      <span class="compact-label">${config.label}</span>
      <span id="busuanzi_value_${config.type}" class="compact-value">0</span>
    `;
      container.appendChild(item);
    });

    document.body.appendChild(container);
    return container;
  }

  // 修改后的加载函数
  function loadBusuanzi() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
      script.async = true;

      script.onload = () => {
        console.log("Busuanzi 加载成功");
        showCompactCounter();
        resolve();
      };

      script.onerror = () => {
        console.warn("主源加载失败，尝试备用源...");
        const backupScript = script.cloneNode();
        backupScript.src =
          "https://cdn.busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";

        backupScript.onload = () => {
          showCompactCounter();
          resolve();
        };

        backupScript.onerror = (err) => {
          console.error("所有源均失败");
          showCompactFallback();
          reject(err);
        };

        document.head.appendChild(backupScript);
      };

      document.head.appendChild(script);
    });
  }

  // 显示统计容器
  function showCompactCounter() {
    const container = document.getElementById("busuanzi-compact-container");
    if (container) {
      container.style.display = "flex";
      container.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 300 }
      );
    }
  }

  // 降级处理
  function showCompactFallback() {
    const container = document.getElementById("busuanzi-compact-container");
    if (container) {
      container.innerHTML = "统计服务暂不可用";
      container.style.display = "flex";
    }
  }

  // 初始化入口
  function initBusuanzi() {
    try {
      const container = createCompactCounter();

      // 添加微型关闭按钮
      const closeBtn = document.createElement("div");
      closeBtn.innerHTML = "×";
      closeBtn.style.cssText = `
        position: absolute;
        top: -6px;
        right: -6px;
        cursor: pointer;
        color: #999;
        font-size: 12px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        display: none; /* 默认隐藏 */
      `;

      // 悬停显示关闭按钮
      container.addEventListener("mouseenter", () => {
        closeBtn.style.display = "block";
      });
      container.addEventListener("mouseleave", () => {
        closeBtn.style.display = "none";
      });

      // 关闭功能
      closeBtn.onclick = (e) => {
        e.stopPropagation();
        container.style.display = "none";
        localStorage.setItem("busuanzi-closed", "true");
      };

      container.appendChild(closeBtn);

      // 检查关闭状态
      if (!localStorage.getItem("busuanzi-closed")) {
        loadBusuanzi().catch(() => {
          showCompactFallback();
        });
      }
    } catch (err) {
      console.error("初始化失败:", err);
      showCompactFallback();
    }
  }

  // 自动初始化
  const compactStyle = document.createElement("style");
  compactStyle.textContent = `
  .busuanzi-compact-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .compact-label {
    color: #666;
  }
  .compact-value {
    color: #2c3e50;
    font-weight: 500;
    min-width: 30px;
    text-align: center;
  }
  @media (max-width: 480px) {
    #busuanzi-compact-container {
      font-size: 10px !important;
      gap: 8px !important;
      padding: 4px 8px !important;
      bottom: 5px !important;
      right: 5px !important;
    }
  }
    #busuanzi-compact-container:hover {
   box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
   transform: translateY(0px);
   transition: all 0.3s ease;
 }
`;
  document.head.appendChild(compactStyle);

  if (document.readyState === "complete") {
    initBusuanzi();
  } else {
    window.addEventListener("load", initBusuanzi);
  }

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
