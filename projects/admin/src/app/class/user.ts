/*
 * RERO ILS UI
 * Copyright (C) 2019 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* tslint:disable */
// required as json properties is not lowerCamelCase
export class User {
  $schema: string;
  birth_date: string;
  city: string;
  email: string;
  first_name: string;
  is_patron: boolean;
  last_name: string;
  library: Library;
  name: string;
  phone: string;
  pid: string;
  circulation_location_pid?: string;
  postal_code: string;
  roles: string[];
  street: string;
  organisation_pid: string;
  barcode?: string;
  items?: any[];
  patron_type?: PatronType;
  is_logged: Boolean = false;

  constructor(user: any) {
    Object.assign(this, user);
  }

  isAuthorizedAdminAccess(roles: Array<string>) {
    return this.roles.filter((role: string) => {
      if (roles.indexOf(role) > -1) {
        return role;
      }
    }).length > 0;
  }

  hasRole(role: string) {
    return this.roles.includes(role);
  }
}

export interface Organisation {
  pid: string;
}

export interface Library {
  pid: string;
  organisation: Organisation;
}

export interface PatronType {
  pid: string;
  name?: string;
}
