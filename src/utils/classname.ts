export const classNames = (...rest: string[]) => {
  return rest.join(' ');
}

export const withSkeleton = (classNames: string[], hasSkeleton: boolean) => {
  return classNames.concat(hasSkeleton ? 'skeleton' : '').join(' ');
}