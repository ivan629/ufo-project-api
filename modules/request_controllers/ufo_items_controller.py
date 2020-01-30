from common.helpers import get_full_range_from_extremes
from modules.request_controllers.ufo_request_controller_base import BaseController


def get_full_item_body(first_sub_item_body, single_region_sub_items_ids, region_type):
    return {
        'longitude': first_sub_item_body['longitude'],
        'latitude': first_sub_item_body['latitude'],
        'size': len(single_region_sub_items_ids),
        'location': first_sub_item_body[region_type],
        'sub_items_ids': single_region_sub_items_ids
    }


class UfoItems(BaseController):
    def __init__(self, request_data):
        data = self.parse(request_data)

        self.region_type = data['regionType']
        self.year = data['year']
        self.day = data['day']
        self.month = data['month']
        self.schema_keys = []
        self.sub_regions_schema_items_ids = self.read_file('sub_regions_schema.json')
        self.all_ufo_items = self.read_file('items.json')
        self.regions_schema_items_ids = self.read_file('regions_schema.json')

    def schema_keys_set(self):
        years_full_range = get_full_range_from_extremes(self.year)
        months_full_range = get_full_range_from_extremes(self.month)
        days_full_range = get_full_range_from_extremes(self.day)

        for year in years_full_range:
            for month in months_full_range:
                for day in days_full_range:
                    schema_tem = "%s/%s/%s" % (day, month, year)
                    self.schema_keys.append(schema_tem)

    def get_all_items(self):
        self.schema_keys_set()

        items_to_send = {}
        region_type = self.region_type

        for key in self.schema_keys:
            if key in self.regions_schema_items_ids:
                regions_list = self.regions_schema_items_ids[key][region_type]

                for region_id in regions_list:
                    single_region_sub_items_ids = self.sub_regions_schema_items_ids[str(region_id)]
                    first_sub_item_id_to_get_info_to_group_parent = single_region_sub_items_ids[0]
                    first_sub_item_body = self.all_ufo_items[str(first_sub_item_id_to_get_info_to_group_parent)]

                    if region_type in first_sub_item_body:
                        if first_sub_item_body[region_type] in items_to_send:
                            items_to_send[first_sub_item_body[region_type]]['size'] += len(
                                single_region_sub_items_ids)
                            items_to_send[first_sub_item_body[region_type]]['sub_items_ids'] = [
                                *items_to_send[first_sub_item_body[region_type]],
                                single_region_sub_items_ids
                            ]
                        else:
                            items_to_send[first_sub_item_body[region_type]] = get_full_item_body(
                                first_sub_item_body,
                                single_region_sub_items_ids,
                                region_type
                            )
                    else:
                        items_to_send[first_sub_item_body['item_id']] = get_full_item_body(
                                first_sub_item_body,
                                single_region_sub_items_ids,
                                region_type
                            )

        return self.jsonify(items_to_send)
