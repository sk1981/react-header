import KeyEvents from '../events/KeyEvents';
/**
 * File to help manage keyboard events in NavigationList
 * The main difference is there because NavigationList for main menu is
 * horizontal and we navigate it by using right and left arrow
 *
 * On the other hand for sub menu, it is a dropdown and we navigate by
 * using up and down keys
 */
const createListHelper = function(nextKey, previousKey, className) {
  return {
    className,
    nextKey,
    previousKey,
    getChange(keyCode) {
      if(keyCode === this.nextKey) {
        return 1;
      } else if(keyCode === this.previousKey) {
        return -1;
      }
    },
    canHandleEvent(keyCode) {
      return keyCode === this.nextKey || keyCode === this.previousKey;
    }
  }
};

/**
 * Helper for sub menu
 */
const SubListHelper = createListHelper(KeyEvents.CODE.DOWN, KeyEvents.CODE.UP, 'site-nav__list--sub');

/**
 * Helper for main menu
 */
const MainListHelper = createListHelper(KeyEvents.CODE.RIGHT, KeyEvents.CODE.LEFT, 'site-nav__list--main');

/**
 * Gets the helper base of type of menu
 *
 *
 * @param isMainMenu
 * @returns {{className, nextKey, previousKey, getChange, canHandleEvent}}
 */
export function getListHelper(isMainMenu) {
  return isMainMenu === true ? MainListHelper: SubListHelper;
}