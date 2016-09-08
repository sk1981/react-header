import KeyEvents from '../events/KeyEvents';
/**
 * File to help manage keyboard events in NavigationList
 * The main difference is there because NavigationList for main menu is
 * horizontal and we navigate it by using right and left arrow
 *
 * On the other hand for sub menu, it is a dropdown and we navigate by
 * using up and down keys
 */


/**
 * Helper for sub menus
 *
 * @type {{class: string, nextKeyCode: number, previousKeyCode: number}}
 */
const SubListHelper = {
  class: 'site-nav__list--sub',
  nextKeyCode: KeyEvents.CODE.DOWN, // sublist we use down to move to next
  previousKeyCode: KeyEvents.CODE.UP // sublist we use up to move to previous
};

/**
 * Help for main menu
 *
 * @type {{class: string, nextKeyCode: number, previousKeyCode: number}}
 */
const MainListHelper = {
  class: 'site-nav__list--main',
  nextKeyCode: KeyEvents.CODE.RIGHT, // mainlist - we use right for next
  previousKeyCode: KeyEvents.CODE.LEFT // mainlist - we use left for next
};

/**
 * Gets the helper base of type of menu
 *
 * @param isMainMenu
 * @returns {{class: string, nextKeyCode: number, previousKeyCode: number}}
 */
export function getListHelper(isMainMenu) {
  return isMainMenu === true ? MainListHelper: SubListHelper;
}