/**
 * Checks for POST request
 * @param {req} req object
 * @returns {Boolean} boolean type
 **/
const isPost = (req) => {
  return req && req.body;
};

/**
 * Delete an array of keys from a given object
 * @param {Object} targetObj Object to remove propeties from
 * @param {Array} props Array of object properties to be deleted
 * @returns {Object} A copy of the orginal object excluding the specified properties
 */
const omit = (targetObj, props) => {
  if (!targetObj) {
    throw new Error("Tarh");
  }

  // Clone the targetObj to avoid mutating the original data
  const obj = Object.assign({}, targetObj);

  if (!Array.isArray(props)) {
    throw new Error('[utils.omit] Keys to be omitted should be an array');
  }

  props.forEach(prop => {
      obj.hasOwnProperty(prop)
          ? delete obj[prop]
          : console.warn(`[utils.omit] Key "${prop}" doesn't exist in object.`);
  });

  return obj;
};

module.exports = {
  isPost,
  omit
}