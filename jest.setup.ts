// github actions sets CI=true and typescript-eslint then expects every file to be parsed once,
// the specs parse the fixtures several times and the second parse would get a program without types
process.env['TSESTREE_SINGLE_RUN'] = 'false';
