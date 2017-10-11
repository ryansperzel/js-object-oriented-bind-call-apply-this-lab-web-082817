function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue) {
  return fn.call(thisValue);
}

function setThisWithApply(fn, thisValue) {
  return fn.call(thisValue);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const copy = functionToBeCopied.bind(thisValue);
  return copy;
}
