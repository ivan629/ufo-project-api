import common.helpers as helpers
from common.constants import STOCK_CHART_DATA_GROUPED_TYPES


def create_stock_chart_data():
    count = 0
    chart_dataset = {}
    countries = []

    chart_data_items = helpers.read_file('items.json')
    for chart_data_grouped_type_key, get_milliseconds_by_group_type in STOCK_CHART_DATA_GROUPED_TYPES.items():
        for item_key, item_value in chart_data_items.items():
            count += 1
            print(count)

            month_day_year, item_time = map(str, item_value['Date_time'].split(' '))
            month, day, year = map(int, month_day_year.split('/'))
            item_milliseconds_date = get_milliseconds_by_group_type(year, month, day)
            item_country = helpers.handle_get_item_country(item_value['3'])

            if item_country not in countries:
                countries.append(item_country)

            value_to_set = {
                'milliseconds_date': item_milliseconds_date,
                'value': 1
            }

            def value_format_callback(value):
                value['value'] += 1
                return value

            helpers.dict_update(
                chart_dataset,
                [item_country, str(year), chart_data_grouped_type_key],
                item_milliseconds_date,
                value_to_set,
                value_format_callback
            )

    helpers.create_file('chart_data_statistic.json', chart_dataset)
    helpers.create_file('chart_data_countries.json', countries)
