angular
  .module('mn-option')
  .directive('mnOption', mnOptionDirective)

function mnOptionDirective($parse) {
  return {
    restrict: 'E',
    controller,
    link,
    require: 'ngModel',
  }

  function controller($scope, $element, $attrs) {
    const name = $element.attr('name')
      || $attrs.ngModel.split('.')[$attrs.ngModel.split('.').length - 1]

    $element.attr('name', name)
    $element.find('input').attr('name', name)
    $element[0].removeAttribute('checked')
    $element[0].querySelector('input').removeAttribute('checked')
  }

  function link(scope, element, attributes) {
    const modelValue = $parse(attributes.ngModel)(scope)
    const modelApplied = angular.equals(element[0].value, modelValue)

    if (!modelApplied) {
      element[0].value = modelValue
      $parse(attributes.ngModel).assign(scope, element[0].value)
    }

    element.find('input').on('change', () => {
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
