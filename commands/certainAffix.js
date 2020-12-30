const fetch = require('node-fetch');

module.exports = {
  name: 'affix',
  description: 'Get information of certain affix for the current week',
  args: true,
  execute(message, args){
    const affixObj = {
      necrotic: {
        'description' : 'All enemies\' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received. Successful melee attacks will apply the Necrotic Wound debuff to the struck player, reducing the potency of healing and absorption shields by 2% per stack, and dealing stacking damage. The  Necrotic Wound debuff lasts for 9 seconds but the duration of the debuff is refreshed each time a new stack is applied, so it will be very difficult for tanks to drop their stacks while actively in combat. Necrotic Wound is removed upon dropping combat.',
        'level' : 7,
        'debuffInfo': 'Consumes the target with creeping decay, inflicting 23 physical damage every 2 seconds, and reducing healing and absorption recieved by 2%, for 9 seconds. STACKS'
      },
      bolstering: {
        'description': 'When any non-boss enemy dies, its death cry empowers nearby allies, increasing their maximum health and damage by 20%.Enemies who die will buff other nearby enemies which are in combat with  Bolster, causing them to gain 20% health and deal 20% additional damage. This can stack multiple times, resulting in an extremely dangerous enemy that will take a long time to defeat. The range on the buffing ability is 30 yards.',
        'level': 4,
      },
      bursting: {
        'description': 'When Slain, non-boss enemies explode, causing all players to suffer damage over 4 seconds. This effect stacks.',
        'level': 4,
      },
      awakened: {
        'description': '[BFA SEASON 4] Obelisks throughout the dungeon allow players to enter N\'yalotha and confront powerful servants of N\'Zoth. If a servant is not dealt with, they must be faced during the final boss encounter.',
        'level': 10,
      },
      raging: {
        'description': 'Non-boss enemies enrage at 30% health remaining, dealing 100% increased damage until defeated',
        'level': 4
      },
      tyrannical: {
        'description': 'Bosses have 40% more health. Bosses and their minions inflict up to 15% increased damage',
        'level': 2,
      },
      fortified: {
        'description': 'Non-boss enemies have 20% more health and inflict up to 30% increased damage',
        'level': 2,
      },
      explosive: {
        'description': 'While in combat, enemies periodically summon Explosive Orbs that will detonate if not destroyed.',
        'level': 7,
      },
      volcanic: {
        'description': 'While in combat, enemies periodically summon Explosive Orbs that will detonate if not destroyed.',
        'level': 7,
      },
      grevious: {
        'description': 'Injured players suffer increasing damage over time until healed.',
        'level': 7,
      },
      sanguine: {
        'description': 'When slain, non-boss enemies leave hebind a lingering pool of ichor that heals their allies and damages players.',
        'level': 4
      },
      teeming: {
        'description': 'Additional non-boss enemies are present throughout the dungeon',
        'level': 4,
      },
      skittish: {
        'description': 'Enemies pay far less attnetion to threat generated by tanks',
        'level': 7,
      },
      quaking: {
        'description': 'Periodically, all players emit a shockwave, inflicting damage and interrupting nearby allies.',
        'level': 7,
      },
      infested: {
        'description': 'Some non-boss enemies have been infested with a Spawn of G\'hunn',
        'level': 10
      },
      reaping: {
        'description': 'Non-boss enemies are empowered by Bwonsamdi and periodically seek vengence from beyond the grave.',
        'level': 10,
      },
      overflowing: {
        'description': 'Healing in excess of target\'s maximum health is instead converted to a heal absorption effect',
        'level': 7,
      },
      prideful: {
        'description': 'Players overflow with pride as they defeat non-boss enemies, eventually forming a Manifestation of Pride. Defeating this Manifestation greatly empowers players.',
        'level': 10
      }
    };

    let affix = args[0].toLowerCase();
    if (affixObj.hasOwnProperty(affix)){
      message.channel.send(`${affix.toUpperCase()}: ${affixObj[affix].description}`);
    } else {
      message.channel.send('Sorry sir that is not a Mythic+ affix... talk to Kat :)');
    };
  }
}
