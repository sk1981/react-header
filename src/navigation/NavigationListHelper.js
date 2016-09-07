import KeyEvents from '../events/KeyEvents';

const SubListHelper = {
  class: 'site-nav__list--sub',
  nextKeyCode: KeyEvents.CODE.DOWN, // sublist we use down to move to next
  previousKeyCode: KeyEvents.CODE.UP // sublist we use up to move to previous
};

const MainListHelper = {
  class: 'site-nav__list--main',
  nextKeyCode: KeyEvents.CODE.RIGHT, // mainlist - we use right for next
  previousKeyCode: KeyEvents.CODE.LEFT // mainlist - we use left for next
};

export function getListHelper(isMainMenu) {
  return isMainMenu === true ? MainListHelper: SubListHelper;
}