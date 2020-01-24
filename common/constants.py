import common.helpers as helper


PIE_CHART_DATASET_TYPES = {
    'month': lambda args: helper.pie_chart_month_helper(args),
    'shape': lambda args: args['UFO_shape'],
}


STOCK_CHART_DATA_GROUPED_TYPES = {
    'day': lambda *args: helper.get_date_millisecods(*args),
    'month': lambda *args: helper.get_date_millisecods(args[0], args[1], 1),
    'year': lambda *args: helper.get_date_millisecods(args[0], 1, 1)
}
