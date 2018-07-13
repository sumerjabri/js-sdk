import { Descriptor, Item, NavigationItem } from '@craftercms/models';

export const GET_ITEM = 'CRAFTERCMS_GET_ITEM';
export const GET_ITEM_COMPLETE = 'CRAFTERCMS_GET_ITEM_COMPLETE';
export const GET_DESCRIPTOR = 'CRAFTERCMS_GET_DESCRIPTOR';
export const GET_DESCRIPTOR_COMPLETE = 'CRAFTERCMS_GET_DESCRIPTOR_COMPLETE';
export const GET_CHILDREN = 'CRAFTERCMS_GET_CHILDREN';
export const GET_CHILDREN_COMPLETE = 'CRAFTERCMS_GET_CHILDREN_COMPLETE';
export const GET_TREE = 'CRAFTERCMS_GET_TREE';
export const GET_TREE_COMPLETE = 'CRAFTERCMS_GET_TREE_COMPLETE';

export const GET_NAV = 'CRAFTERCMS_GET_NAV';
export const GET_NAV_COMPLETE = 'CRAFTERCMS_GET_NAV_COMPLETE';
export const GET_NAV_BREADCRUMB = 'CRAFTERCMS_GET_NAV_BREADCRUMB';
export const GET_NAV_BREADCRUMB_COMPLETE = 'CRAFTERCMS_GET_NAV_BREADCRUMB_COMPLETE';

export function getItem(itemUrl: string) {
  return {
    type: GET_ITEM,
    payload: itemUrl
  }
}

export function getItemComplete(item: Item) {
  return {
    type: GET_ITEM_COMPLETE,
    payload: item
  }
}

export function getDescriptor(url: string) {
  return {
    type: GET_DESCRIPTOR,
    payload: url
  }
}

export function getDescriptorComplete(descriptorData: {
  descriptor: Descriptor,
  url: string
}) {
  return {
    type: GET_DESCRIPTOR_COMPLETE,
    payload: descriptorData
  }
}

export function getChildren(url: string) {
  return {
    type: GET_CHILDREN,
    payload: url
  }
}

export function getChildrenComplete(childrenData: {
  children: Array<Item>,
  url: string
}) {
  return {
    type: GET_CHILDREN_COMPLETE,
    payload: childrenData
  }
}

export function getTree(url: string);
export function getTree(url: string, depth: Number);
export function getTree(url: string, depth: Number = 1) {
  return {
    type: GET_TREE,
    payload: {
      url,
      depth
    }
  }
}

export function getTreeComplete(tree: Item) {
  return {
    type: GET_TREE_COMPLETE,
    payload: tree
  }
}

export function getNav(url: string);
export function getNav(url: string, depth: Number);
export function getNav(url: string, depth: Number, currentPageUrl: string)
export function getNav(url: string, depth: Number = 1, currentPageUrl: string = '') {
  return {
    type: GET_NAV,
    payload: {
      url,
      depth,
      currentPageUrl
    }
  }
}

export function getNavComplete(nav: NavigationItem) {
  return {
    type: GET_NAV_COMPLETE,
    payload: nav
  }
}

export function getNavBreadcrumb(url: string);
export function getNavBreadcrumb(url: string, root: string);
export function getNavBreadcrumb(url: string, root: string = '') {
  return {
    type: GET_NAV_BREADCRUMB,
    payload: {
      url,
      root
    }
  }
}

export function getNavBreadcrumbComplete(navBreadcrumbData: {
  breadcrumb: Array<NavigationItem>,
  url: string
}) {
  return {
    type: GET_NAV_BREADCRUMB_COMPLETE,
    payload: navBreadcrumbData
  }
}