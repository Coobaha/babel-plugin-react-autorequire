export default function ({ types: t }) {
  const buildImport = key => t.importDeclaration([
    t.importDefaultSpecifier(t.identifier(key)),
  ], t.stringLiteral(key));

  const buildRequire = key => t.variableDeclaration(
    'var',
    [
      t.variableDeclarator(
        t.identifier(key),
        t.callExpression(
          t.identifier('require'),
          [
            t.stringLiteral(key),
          ]
        )
      ),
    ]
  );

  return {
    visitor: {
      JSXElement(node, { file }) {
        file.set('hasJSX', true);
      },
      Program: {
        enter(path, { file }) {
          file.set('hasJSX', false);
        },

        exit({ node, scope }, { file, opts }) {
          if (!file.get('hasJSX')) {
            return;
          }

          if (node.sourceType === 'module') {
            const builder = opts.es5 ? buildRequire : buildImport;
            Object.keys(scope.globals).forEach(k => {
              if (t.isJSXIdentifier(scope.globals[k])) {
                node.body.unshift(builder(k));
              }
            });
          }
        },
      },
    },
  };
}
