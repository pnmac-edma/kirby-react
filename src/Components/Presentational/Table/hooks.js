import { useState } from 'react';

// custom hook that sets the field for the form
export const useForm = initialValues => {
  const [form, setValue] = useState(initialValues);

  const setField = (field, newValue) => {
    setValue({
      ...form,
      [field]: newValue
    });
  };

  const resetForm = () => setValue(initialValues);

  return [form, setField, resetForm];
};

// custom hook that grabs filter form inputs to create a chip upon submit
export const useSelectedFilters = (initialValues, filterForm, resetForm) => {
  const [selectedFilters, setValue] = useState(initialValues);

  const setSelectedFilters = () => {
    setValue([
      ...selectedFilters,
      {
        filterBy: filterForm.filterBy,
        filterType: filterForm.filterType,
        filterTerm: filterForm.filterTerm
      }
    ]);
    resetForm();
  };

  const removeFilter = i => {
    const newSelectedFilters = [...selectedFilters];
    newSelectedFilters.splice(i, 1);
    setValue(newSelectedFilters);
  };

  return [selectedFilters, setSelectedFilters, removeFilter];
};
