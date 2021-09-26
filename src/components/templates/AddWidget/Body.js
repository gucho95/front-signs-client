import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Button, BUTTON_TYPES, Spacing, BUTTON_HTML_TYPES } from '@atoms';
import WIDGET_TYPES, { WIDGET_FORM_COMPONENTS } from '@constants/widgets';
import { useRouter } from '@hooks';
import pageWidgets from '@actions/pageWidgets';
import { PATHS } from '@constants/paths';
import { selectPageWidget } from '@selectors/pageWidgets';
import { v4 as uuidv4 } from 'uuid';

const classes = {
  divider: 'w-full h-1px bg-grey-light',
  widgetFormWrapper: 'max-w-3xl',
  buttonWrapper: 'flex justify-end',
};

const OPTIONS = Object.values(WIDGET_TYPES).map((opt) => ({ value: opt, label: opt }));

const Body = () => {
  const dispatch = useDispatch();
  const { params, history } = useRouter();
  const { widgetId, page } = params;

  const addWidget = (data) => dispatch(pageWidgets.add(data));
  const updateWidget = (data) => dispatch(pageWidgets.update(data));

  const isUpdateMode = !!widgetId;
  const widgetData = useSelector((state) => selectPageWidget(state, page, widgetId));

  const methods = useForm({ mode: 'onChange', shouldUnregister: true, defaultValues: isUpdateMode ? widgetData : {} });
  const { register, watch, handleSubmit, getValues, setValue } = methods;
  const activeType = watch('type');

  const onFormSuccess = (widget) => {
    const data = {
      page,
      id: isUpdateMode ? widgetId : uuidv4(),
      widgetData: { ...widget },
    };

    isUpdateMode ? updateWidget(data) : addWidget(data);
    history.push(`${PATHS.DASHBOARD}/pages/${page}`);
  };

  const onFormError = (errors) => {
    console.log('errors', errors);
  };

  const WidgetForm = useMemo(() => (activeType ? WIDGET_FORM_COMPONENTS[activeType] : null), [activeType]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onFormSuccess, onFormError)}>
        <Select options={OPTIONS} placeholder='Select a widget' className='w-6/12' {...register('type')} />
        <Spacing className='pt-4' />
        <div className={classes.divider} />
        <Spacing className='pt-4' />
        <div className={classes.widgetFormWrapper}>
          {activeType ? <WidgetForm /> : null}
          <Spacing className='pt-4' />

          {activeType ? (
            <div className={classes.buttonWrapper}>
              <Button type={BUTTON_TYPES.PRIMARY} htmlType={BUTTON_HTML_TYPES.SUBMIT} children='Submit' />
            </div>
          ) : (
            <div>No widget selected</div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Body;
