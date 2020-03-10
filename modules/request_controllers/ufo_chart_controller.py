import common.constants as constants
from modules.request_controllers.ufo_request_controller_base import BaseController


class UfoChart(BaseController):
    def __init__(self, request_data):
        data = self.parse(request_data)

        self.years_range_data = self.read_file('years_range.json')
        self.chart_data_countries = self.read_file('chart_data_countries.json')
        self.stock_chart_data_statistic = self.read_file('chart_data_statistic.json')
        self.pie_chart_data_statistic = self.read_file('pie_chart_data_statistic.json')

        self.years_range = data['years_range']
        self.start = self.years_range['start']
        self.stop = self.years_range['stop']
        self.pie_chart_data = {}
        self.stock_chart_data = {}

        self.country = 'Other' if ('country' in data and data['country'] is None) else data['country']

    def get_ufo_chart_data(self):
        chart_response = {}

        while self.start <= self.stop:
            if str(self.start) in self.stock_chart_data_statistic[self.country]:
                for group_type in constants.STOCK_CHART_DATA_GROUPED_TYPES:
                    one_group_ufo_items_dict = []
                    single_dates_ufo_data_items = self.stock_chart_data_statistic[self.country][str(self.start)][
                        group_type]

                    for single_date_ufo_data_item in single_dates_ufo_data_items.values():
                        one_group_ufo_items_dict.append(single_date_ufo_data_item)

                    if group_type in self.stock_chart_data:
                        self.stock_chart_data[group_type] = {
                            'ufo_data': [*one_group_ufo_items_dict, *self.stock_chart_data[group_type]['ufo_data']]
                        }
                    else:
                        self.stock_chart_data[group_type] = {'ufo_data': [*one_group_ufo_items_dict]
                                                             }

            if str(self.start) in self.pie_chart_data_statistic[self.country]:
                for pie_chart_group_type in constants.PIE_CHART_DATASET_TYPES:
                    single_year_data_items = self.pie_chart_data_statistic[self.country][str(self.start)][
                        pie_chart_group_type]

                    for data_item_key, data_item_value in single_year_data_items.items():
                        if pie_chart_group_type in self.pie_chart_data:
                            if data_item_key in self.pie_chart_data[pie_chart_group_type]:
                                self.pie_chart_data[pie_chart_group_type][data_item_key]['value'] += \
                                data_item_value['value']
                            else:
                                self.pie_chart_data[pie_chart_group_type][data_item_key] = data_item_value
                        else:
                            self.pie_chart_data[pie_chart_group_type] = {
                                data_item_key: data_item_value
                            }
            self.start += 1

            for group_chart_type_key, chart_data_group_values in self.stock_chart_data.items():
                for chart_type_key, chart_type_value in chart_data_group_values.items():
                    self.stock_chart_data[group_chart_type_key][chart_type_key] = sorted(chart_type_value,
                                                                                         key=lambda k: k[
                                                                                             'milliseconds_date'])

            chart_response = {
                'pie_chart_data': self.pie_chart_data,
                'stock_chart_data': self.stock_chart_data,
                'years_range': self.years_range_data,
                'countries_data': {
                    'countries': self.chart_data_countries,
                    'selected_country': self.country
                },
                'test': 'test'
            }

        return self.jsonify(chart_response)
