angular
  .module('mn-option')
  .directive('mnOption', mnOptionDirective)

function mnOptionDirective($parse) {
  return {
    restrict: 'E',
    link,
    require: 'ngModel',
  }

  function link(scope, element, attributes) {
    const name = element.attr('name')
      || attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
    const modelValue = $parse(attributes.ngModel)(scope)
    const modelApplied = angular.equals(element[0].value, modelValue)

    element.attr('name', name)

    if (!modelApplied) {
      element[0].value = modelValue
      $parse(attributes.ngModel).assign(scope, element[0].value)
    }

    element.find('input').on('change', () => {
      const option = event.target.closest('mn-option')
      $parse(attributes.ngModel).assign(scope, option.value)
      scope.$apply()
    })

    // const dirtyInput = element[0].querySelector('label + label')
    // if (dirtyLabel) {
    //   element[0].removeChild(dirtyLabel)
    // }
    // const input = element.find('input')
  }
}
