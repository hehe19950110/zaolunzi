let importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("./iconsvg/", true, /\.svg$/));
} catch (error) {}
