angular
  .module('mn-option')
  .directive('mnOption', mnOptionDirective)

function mnOptionDirective($parse) {
  return {

  }

  const obj = {
    restrict: 'E',
    controller,
    link,
    require: 'ngModel',
  }
  console.log(obj)

  function controller($scope, $element, $attrs) {
    const name = $element.attr('name')
      || $attrs.ngModel.split('.')[$attrs.ngModel.split('.').length - 1]

    $element.attr('name', name)
    $element[0].removeAttribute('checked')
  }

  function link(scope, element, attributes) {
    const modelValue = $parse(attributes.ngModel)(scope)
    const modelApplied = angular.equals(element[0].value, modelValue)

    if (!modelApplied) {
      element[0].value = modelValue
      // console.log(modelValue)
      $parse(attributes.ngModel).assign(scope, element[0].value)
    }

    element.find('input').on('change', (event) => {
      console.log(event.target)
      $parse(attributes.ngModel).assign(scope, element[0].value)
      scope.$apply()
    })

    // const dirtyInput = element[0].querySelector('label + label')
    // if (dirtyLabel) {
    //   element[0].removeChild(dirtyLabel)
    // }
    // const input = element.find('input')
  }
}
