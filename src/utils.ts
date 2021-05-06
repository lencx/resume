import dayjs from 'dayjs';

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