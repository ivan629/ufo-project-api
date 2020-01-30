import common.helpers as helpers
from common.constants import PIE_CHART_DATASET_TYPES


def get_items_dataset():
    return helpers.read_file('items.json')


def value_format(value):
    value['value'] += 1
    return value


def create_pie_chart_dataset():
    pie_chart_response_data = {}
    items_dataset = get_items_dataset()
    count = 0

    for item_key, item_value in items_dataset.items():
        for chart_type_key, get_chart_type_value in PIE_CHART_DATASET_TYPES.items():
            count += 1
            print(count)

            chart_type_sub_type_value = get_chart_type_value(item_value)
            month_day_year, item_time = map(str, item_value['Date_time'].split(' '))
            month, day, year = map(str, month_day_year.split('/'))
            item_country = helpers.handle_get_item_country(item_value['3'])

            value_to_set = {
                'name': chart_type_sub_type_value,
                'value': 1
            }

            helpers.dict_update(
                pie_chart_response_data,
                [item_country, year, chart_type_key],
                chart_type_sub_type_value,
                value_to_set,
                value_format
            )

    helpers.create_file('pie_chart_data_statistic.json', pie_chart_response_data)
