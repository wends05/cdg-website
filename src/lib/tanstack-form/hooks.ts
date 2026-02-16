import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { SingleDatePickerField } from "@/lib/tanstack-form/components/single-date-picker-field";
import { InputWithResetField } from "@/lib/tanstack-form/components/input-with-reset-field";
import { RichTextField } from "@/lib/tanstack-form/components/rich-text-field";
import { SingleImageUploadField } from "@/lib/tanstack-form/components/single-image-upload-field";
import { SubmitButton } from "@/lib/tanstack-form/components/submit-button";
import { TextField } from "@/lib/tanstack-form/components/text-field";
import { TextareaField } from "@/lib/tanstack-form/components/textarea-field";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextareaField,
    SingleDatePickerField,
    InputWithResetField,
    RichTextField,
    SingleImageUploadField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
