export const rootDirectionSnippet = String.raw`document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', locale);`;

export const logicalPropertiesSnippet = String.raw`.navIcon {
  margin-inline-end: 8px;
}

.drawer {
  inset-inline-end: 0;
  padding-inline: 20px;
  text-align: start;
}`;

export const directionalAssetsSnippet = String.raw`[dir='rtl'] .iconArrow,
[dir='rtl'] .iconBack,
[dir='rtl'] .breadcrumbChevron {
  transform: scaleX(-1);
}

.toastEnter {
  animation: slideFromInlineEnd 240ms ease;
}

[dir='rtl'] .toastEnter {
  animation-name: slideFromInlineStart;
}

@keyframes slideFromInlineEnd {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromInlineStart {
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`;

export const tailwindRtlSnippet = String.raw`<!-- 过渡方案：用 rtl: 做方向覆盖 -->
<div class="pl-4 rtl:pr-4 rtl:pl-0 text-left rtl:text-right">
  ...
</div>

<!-- 更推荐：直接写逻辑属性工具类 -->
<div class="ps-4 pe-3 text-start">
  ...
</div>`;

export const rtlTypographySnippet = String.raw`[lang='ar'] {
  font-family: 'Noto Sans Arabic', 'Cairo', sans-serif;
  line-height: 1.8;
  letter-spacing: 0;
}

[lang='he'] {
  font-family: 'Noto Sans Hebrew', sans-serif;
}

[dir='rtl'] .metaText {
  text-align: start;
}`;

export const i18nDirectionSnippet = String.raw`i18n.on('languageChanged', (lng) => {
  const rtlLangs = ['ar', 'he', 'fa', 'ur'];
  const isRTL = rtlLangs.includes(lng);

  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});`;