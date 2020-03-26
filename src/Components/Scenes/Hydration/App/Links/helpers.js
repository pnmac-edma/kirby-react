/**
 * creates a custom path for svg path element
 * model: consist of the main model that holds points needed to calculate path
 * path: consists of the default path provided by the library
 */
export const createCustomPath = (model, path) => {
  if (model.points.length === 2) {
    // coordinates of source and target
    const s = { x: model.points[0].x, y: model.points[0].y };
    const t = { x: model.points[1].x, y: model.points[1].y };
    // get differences for x and y
    const offsetX = t.x - s.x;
    const offsetY = t.y - s.y;

    if (offsetX > 0) {
      // anytime the right node is in front of the left node
      // only a cubic bezier curve is needed

      // create fixed coordinates for source and target control points
      const sc = { x: s.x + 50, y: s.y };
      const tc = { x: t.x - 50, y: t.y };
      // create str needed for svg path
      const pathStr = `M ${s.x} ${s.y} C ${sc.x} ${sc.y}, ${tc.x} ${tc.y}, ${t.x} ${t.y}`;
      return pathStr;
    } else {
      // when the right node is in back of the left node
      // you need 2 quadratic and 1 cubic bezier curves
      /**
       * template for organizing points bezier curves:
       * b = {
       *  s: start position
       *  e: end position
       *  c1: 1st control point
       *  c2: 2nd control point (only for cubic)
       * }
       */
      // have a constant diff
      const diff = 25;
      // calculator quarter distance
      const qD = (1 / 4) * offsetY;
      // first quadratic curve
      const b1 = {
        s: { x: s.x, y: s.y },
        e: { x: s.x + diff, y: s.y + qD },
        c: { x: s.x + diff, y: s.y }
      };
      // cubic bezier curve
      const b2 = {
        s: { x: s.x + diff, y: s.y + qD },
        e: { x: t.x - diff, y: t.y - qD },
        c1: { x: s.x + diff, y: s.y + (2 / 3) * offsetY },
        c2: { x: t.x - diff, y: t.y - (2 / 3) * offsetY }
      };
      // second quadratic curve
      const b3 = {
        s: { x: t.x - diff, y: t.y - qD },
        e: { x: t.x, y: t.y },
        c: { x: t.x - diff, y: t.y }
      };
      // strings that represent in curves in path form used for svg
      const b1Str = `M ${b1.s.x} ${b1.s.y} Q ${b1.c.x} ${b1.c.y} ${b1.e.x} ${b1.e.y}`;
      const b2Str = `M ${b2.s.x} ${b2.s.y} C ${b2.c1.x} ${b2.c1.y}, ${b2.c2.x} ${b2.c2.y}, ${b2.e.x} ${b2.e.y}`;
      const b3Str = `M ${b3.s.x} ${b3.s.y} Q ${b3.c.x} ${b3.c.y} ${b3.e.x} ${b3.e.y}`;
      return `${b1Str} ${b2Str} ${b3Str}`;
    }
  }

  return path;
};
