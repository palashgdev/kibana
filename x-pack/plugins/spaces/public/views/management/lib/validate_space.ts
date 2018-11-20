/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
<<<<<<< HEAD
=======
import { i18n } from '@kbn/i18n';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
import { isReservedSpace } from '../../../../common/is_reserved_space';
import { Space } from '../../../../common/model/space';
import { isValidSpaceIdentifier } from './space_identifier_utils';

interface SpaceValidatorOptions {
  shouldValidate?: boolean;
}

export class SpaceValidator {
  private shouldValidate: boolean;

  constructor(options: SpaceValidatorOptions = {}) {
    this.shouldValidate = options.shouldValidate || false;
  }

  public enableValidation() {
    this.shouldValidate = true;
  }

  public disableValidation() {
    this.shouldValidate = false;
  }

  public validateSpaceName(space: Partial<Space>) {
    if (!this.shouldValidate) {
      return valid();
    }

    if (!space.name || !space.name.trim()) {
<<<<<<< HEAD
      return invalid(`Name is required`);
    }

    if (space.name.length > 1024) {
      return invalid(`Name must not exceed 1024 characters`);
=======
      return invalid(
        i18n.translate('xpack.spaces.management.validateSpace.requiredNameErrorMessage', {
          defaultMessage: 'Name is required',
        })
      );
    }

    if (space.name.length > 1024) {
      return invalid(
        i18n.translate('xpack.spaces.management.validateSpace.nameMaxLengthErrorMessage', {
          defaultMessage: 'Name must not exceed 1024 characters',
        })
      );
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    }

    return valid();
  }

  public validateSpaceDescription(space: Partial<Space>) {
    if (!this.shouldValidate) {
      return valid();
    }

    if (space.description && space.description.length > 2000) {
<<<<<<< HEAD
      return invalid(`Description must not exceed 2000 characters`);
=======
      return invalid(
        i18n.translate('xpack.spaces.management.validateSpace.describeMaxLengthErrorMessage', {
          defaultMessage: 'Description must not exceed 2000 characters',
        })
      );
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    }

    return valid();
  }

  public validateURLIdentifier(space: Partial<Space>) {
    if (!this.shouldValidate) {
      return valid();
    }

    if (isReservedSpace(space)) {
      return valid();
    }

    if (!space.id) {
<<<<<<< HEAD
      return invalid(`URL identifier is required`);
    }

    if (!isValidSpaceIdentifier(space.id)) {
      return invalid('URL identifier can only contain a-z, 0-9, and the characters "_" and "-"');
=======
      return invalid(
        i18n.translate('xpack.spaces.management.validateSpace.urlIdentifierRequiredErrorMessage', {
          defaultMessage: 'URL identifier is required',
        })
      );
    }

    if (!isValidSpaceIdentifier(space.id)) {
      return invalid(
        i18n.translate(
          'xpack.spaces.management.validateSpace.urlIdentifierAllowedCharactersErrorMessage',
          {
            defaultMessage:
              'URL identifier can only contain a-z, 0-9, and the characters "_" and "-"',
          }
        )
      );
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    }

    return valid();
  }

  public validateForSave(space: Space) {
    const { isInvalid: isNameInvalid } = this.validateSpaceName(space);
    const { isInvalid: isDescriptionInvalid } = this.validateSpaceDescription(space);
    const { isInvalid: isIdentifierInvalid } = this.validateURLIdentifier(space);

    if (isNameInvalid || isDescriptionInvalid || isIdentifierInvalid) {
      return invalid();
    }

    return valid();
  }
}

function invalid(error: string = '') {
  return {
    isInvalid: true,
    error,
  };
}

function valid() {
  return {
    isInvalid: false,
  };
}
