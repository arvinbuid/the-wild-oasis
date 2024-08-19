import {useSettings} from "./useSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import {useUpdateSetting} from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = {},
  } = useSettings();

  const {isUpdating, updateSetting} = useUpdateSetting();

  function handleUpdateSetting(e) {
    const {value, id, defaultValue} = e.target;

    if (!value || !id || defaultValue === value) return;
    updateSetting({[id]: value});
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='minBookingLength'
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='maxBookingLength'
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='maxGuestsPerBooking'
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfastPrice'
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
