import * as bt from 'babel-types';
import Context from '../Context';

export default function walkFunctionDeclaration(node: bt.FunctionDeclaration, ctx: Context): bt.Identifier[] {
  if (!node.id) {
    throw ctx.getError('This function is missing an ID', node);
  }
  ctx.declare(node.id, node);
  return [node.id];
}
