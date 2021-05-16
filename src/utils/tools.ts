import dayjs from 'dayjs';

import { resumeTypeOptions, mdRe } from './constant';

export const getResumeType = (val: string, key: string = 'label') => (
  (resumeTypeOptions.find((i) => i.value === val) as any)[key]
);

export function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export function getVal(data: any, ...args: any): any {
  function _getVal(_data: any): string {
    if (args.length > 0) {
      return _getVal(_data[args.shift()])
    }
    return _data || '';
  }
  if (args.length > 0) {
    return _getVal(data);
  }
  return function(key: string) {
    return data[key] || ''
  }
}

export function diffTime(start: any, end?: any) {
  const val = dayjs(end ? end : new Date()).diff(dayjs(start), 'year');
  if (val < 0 || isNaN(val)) return 0;
  return val;
}

export function fmtResumeAddr(data: string) {
  const v1 = data.split('|');
  if (/^http/.test(data)) return { type: v1[0], link: data };

  if (!v1[1]) {
    return { msg: '简历数据配置错误' };
  }

  const v2 = v1[1].split('/');
  return {
    type: v1[0],
    username: v2.shift(),
    repo: v2.shift(),
    branch: v2.shift(),
    path: v2.join('/'),
  };
}

export function extractTag(str: string) {
  return str
    .replace(mdRe.boldRe, '<b>$2</b>')
    .replace(mdRe.linkRe, '<a href="$2" target="_blank">$1</a>')
    .replace(mdRe.delRe, '<del>$1</del>')
    .replace(mdRe.codeRe, '<code>$1</code>');
}
